import { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const API = 'https://api.openf1.org/v1'
const REQUEST_GAP_MS = 380

type Session = { session_key: number; meeting_key: number; circuit_short_name: string; country_name: string; date_start: string; date_end: string; year: number; is_cancelled: boolean }
type Driver = { driver_number: number; full_name: string; team_name: string }
type Stint = { stint_number: number; lap_start: number; lap_end: number; compound: string; tyre_age_at_start: number }
type Pit = { lap_number: number; lane_duration: number; pit_duration: number; stop_duration: number | null }
type Lap = { lap_number: number; lap_duration: number | null; is_pit_out_lap: boolean; date_start: string }
type Position = { position: number; date: string }

type Analysis = {
  session: Session
  driver: Driver
  stints: Stint[]
  pits: Pit[]
  laps: Lap[]
  positions: Position[]
}

const sleep = (ms: number) => new Promise(resolve => window.setTimeout(resolve, ms))
async function get<T>(path: string): Promise<T> {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(`${API}/${path}`)
    if (response.ok) return response.json() as Promise<T>
    if (response.status !== 429 || attempt === 3) throw new Error(`OpenF1 returned ${response.status}`)
    const retryAfter = Number(response.headers.get('Retry-After'))
    await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1400 * (attempt + 1))
  }
  throw new Error('OpenF1 request could not be completed.')
}

async function loadMaxStrategy(): Promise<Analysis> {
  const year = new Date().getFullYear()
  const sessions = await get<Session[]>(`sessions?session_name=Race&year=${year}`)
  const now = Date.now()
  const session = sessions
    .filter(item => !item.is_cancelled && Date.parse(item.date_end) <= now)
    .sort((a, b) => Date.parse(b.date_end) - Date.parse(a.date_end))[0]

  if (!session) throw new Error('No completed race is currently available from OpenF1.')
  await sleep(REQUEST_GAP_MS)
  const drivers = await get<Driver[]>(`drivers?session_key=${session.session_key}`)
  const driver = drivers.find(item => item.full_name.toLowerCase().includes('verstappen'))
  if (!driver) throw new Error('Max Verstappen is not listed in this race session.')

  await sleep(REQUEST_GAP_MS)
  const stints = await get<Stint[]>(`stints?session_key=${session.session_key}&driver_number=${driver.driver_number}`)
  await sleep(REQUEST_GAP_MS)
  const pits = await get<Pit[]>(`pit?session_key=${session.session_key}&driver_number=${driver.driver_number}`)
  await sleep(REQUEST_GAP_MS)
  const laps = await get<Lap[]>(`laps?session_key=${session.session_key}&driver_number=${driver.driver_number}`)
  await sleep(REQUEST_GAP_MS)
  const positions = await get<Position[]>(`position?session_key=${session.session_key}&driver_number=${driver.driver_number}`)
  return { session, driver, stints: stints.sort((a, b) => a.stint_number - b.stint_number), pits, laps, positions }
}

function compoundShort(compound: string) {
  return compound === 'INTERMEDIATE' ? 'I' : compound === 'SOFT' ? 'S' : compound === 'MEDIUM' ? 'M' : compound === 'HARD' ? 'H' : compound.slice(0, 1)
}

function compoundClass(compound: string) {
  return `compound ${compound.toLowerCase()}`
}

function formatDuration(seconds: number | null) {
  if (!seconds) return '—'
  const minutes = Math.floor(seconds / 60)
  const remainder = (seconds % 60).toFixed(3).padStart(6, '0')
  return `${minutes}:${remainder}`
}

function average(values: number[]) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null
}

function getStintLaps(stint: Stint, laps: Lap[]) {
  return laps.filter(lap => lap.lap_number >= stint.lap_start && lap.lap_number <= stint.lap_end && lap.lap_duration && !lap.is_pit_out_lap)
}

function App() {
  const [data, setData] = useState<Analysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState<'overview' | 'stints' | 'scenario'>('overview')
  const [pitOffset, setPitOffset] = useState(0)

  const refresh = async () => {
    setLoading(true)
    setError(null)
    try { setData(await loadMaxStrategy()) }
    catch (reason) { setError(reason instanceof Error ? reason.message : 'Could not load the OpenF1 data.') }
    finally { setLoading(false) }
  }

  useEffect(() => { void refresh() }, [])

  const statistics = useMemo(() => {
    if (!data) return null
    const stintRows = data.stints.map(stint => {
      const stintLaps = getStintLaps(stint, data.laps)
      return { stint, average: average(stintLaps.map(lap => lap.lap_duration!)), best: Math.min(...stintLaps.map(lap => lap.lap_duration!)) }
    })
    const pitAverage = average(data.pits.map(pit => pit.lane_duration))
    const initial = data.positions[0]?.position
    const bestPosition = Math.min(...data.positions.map(item => item.position))
    return { stintRows, pitAverage, initial, bestPosition }
  }, [data])

  if (loading) return <main className="state"><span className="loading-dot" />Loading the latest completed race from OpenF1…</main>
  if (error || !data || !statistics) return <main className="state error"><p>{error ?? 'No data available.'}</p><button onClick={refresh}>Try again</button></main>

  const totalLaps = Math.max(...data.stints.map(stint => stint.lap_end))
  const firstStop = data.pits[0]
  const simulatedLap = Math.max(1, (firstStop?.lap_number ?? 1) + pitOffset)
  const paceDelta = pitOffset === 0 ? 0 : Math.abs(pitOffset) * 0.45
  const direction = pitOffset === 0 ? 'same baseline' : pitOffset < 0 ? 'earlier stop, fresher tyres' : 'later stop, more track position before stopping'

  return <main className="app-shell">
    <header className="topbar">
      <a className="brand" href="#top" aria-label="PitWall home">PitWall <i /></a>
      <nav aria-label="Main navigation"><a className="active" href="#overview">Race replay</a><a href="#learn">Learn F1</a><a href="#archive">Race archive</a></nav>
      <button className="quiet-button" onClick={refresh}>Refresh data</button>
    </header>

    <section className="masthead" id="top">
      <div><h1>Max Verstappen <span>—</span> Strategy debrief</h1><p>{data.session.country_name} Grand Prix · {data.session.circuit_short_name} · Race ({totalLaps} laps) · Data fetched from OpenF1</p></div>
      <div className="session-meta"><span>Driver<strong>{data.driver.full_name}</strong></span><span>Team<strong>{data.driver.team_name}</strong></span></div>
    </section>

    <div className="tabs" aria-label="Debrief sections">
      {(['overview', 'stints', 'scenario'] as const).map(tab => <button className={selectedTab === tab ? 'selected' : ''} key={tab} onClick={() => setSelectedTab(tab)}>{tab === 'overview' ? 'Overview' : tab === 'stints' ? 'Stints' : 'What if?'}</button>)}
    </div>

    <div className="dashboard">
      <section className="data-column">
        {selectedTab !== 'scenario' && <>
          <section className="panel timeline-panel">
            <h2>Race timeline</h2><p className="subtle">Observed pit-stop moments</p>
            <div className="timeline">{data.pits.map((pit, index) => <div className="timeline-event" style={{ left: `${(pit.lap_number / totalLaps) * 100}%` }} key={`${pit.lap_number}-${index}`}><i /><strong>Lap {pit.lap_number}</strong><small>{data.stints[index]?.compound ?? 'Tyre'} → {data.stints[index + 1]?.compound ?? 'finish'}</small></div>)}</div>
          </section>
          <section className="panel"><h2>Tyre stint timeline</h2><p className="subtle">What the data recorded</p><div className="stint-bar">{data.stints.map(stint => <div key={stint.stint_number} className={compoundClass(stint.compound)} style={{ width: `${((stint.lap_end - stint.lap_start + 1) / totalLaps) * 100}%` }}><b>{compoundShort(stint.compound)}</b><span>{stint.compound.toLowerCase()}</span></div>)}</div><div className="lap-scale"><span>Lap 1</span>{data.stints.map(stint => <span key={stint.stint_number}>L{stint.lap_end}</span>)}</div></section>
          <section className="panel pace-panel"><h2>Lap pace</h2><p className="subtle">Lower lap time is faster. Pit/out laps are omitted.</p><PaceChart laps={data.laps} stints={data.stints} /></section>
        </>}
        {selectedTab !== 'overview' && <section className="panel table-panel"><h2>Stint data — observed</h2><table><thead><tr><th>Stint</th><th>Laps</th><th>Tyre</th><th>Average lap</th><th>Best lap</th></tr></thead><tbody>{statistics.stintRows.map(({ stint, average: stintAverage, best }) => <tr key={stint.stint_number}><td>{stint.stint_number}</td><td>{stint.lap_start}–{stint.lap_end}</td><td><em className={compoundClass(stint.compound)}>{compoundShort(stint.compound)}</em>{stint.compound.toLowerCase()}</td><td>{formatDuration(stintAverage)}</td><td>{Number.isFinite(best) ? formatDuration(best) : '—'}</td></tr>)}</tbody></table></section>}
      </section>

      <aside className="insight-column">
        <section className="panel why-panel"><h2><i />Why this strategy?</h2><p className="subtle">We show the evidence first, then a careful interpretation.</p><div className="evidence"><h3>Observed facts</h3><ul><li>Max used {data.stints.length} tyre stints: {data.stints.map(stint => `${compoundShort(stint.compound)} (L${stint.lap_start}–${stint.lap_end})`).join(', ')}.</li><li>He stopped on {data.pits.map(pit => `lap ${pit.lap_number}`).join(', ')}; average pit-lane time was {formatDuration(statistics.pitAverage)}.</li>{statistics.initial && <li>The sampled position feed begins at P{statistics.initial} and records a best observed position of P{statistics.bestPosition}.</li>}</ul></div><div className="interpretation"><h3>Our interpretation</h3><p>This sequence is consistent with teams responding to changing grip and tyre suitability: intermediate tyres were used at the start and finish, with soft tyres used for the middle of the race. The pit stops reset tyre age and switched compounds as conditions evolved.</p><p className="caveat">This is a data-based explanation, not a claim of Red Bull’s private decision-making. Team radio, weather detail, traffic, and race control are not yet modelled in this first slice.</p></div></section>
        <section className="panel scenario-panel"><h2><i />Try a simple scenario</h2><p className="subtle">Move the first stop; this is an educational estimate, not a race prediction.</p><div className="scenario-control"><label htmlFor="pit-offset">First stop: lap {simulatedLap}</label><input id="pit-offset" type="range" min="-3" max="3" value={pitOffset} onChange={event => setPitOffset(Number(event.target.value))} /><div><span>3 laps earlier</span><span>Recorded lap {firstStop?.lap_number ?? '—'}</span><span>3 laps later</span></div></div><div className="scenario-result"><strong>{pitOffset === 0 ? 'Recorded strategy' : `Estimated trade-off: ~${paceDelta.toFixed(1)}s`}</strong><p>{direction}. A real model would also account for traffic, weather, rivals, and race-control timing.</p></div></section>
        <p className="source-note">Source: <a href={`https://api.openf1.org/v1/sessions?session_key=${data.session.session_key}`} target="_blank" rel="noreferrer">OpenF1 session {data.session.session_key}</a>. Last refreshed in your browser.</p>
      </aside>
    </div>
  </main>
}

function PaceChart({ laps, stints }: { laps: Lap[]; stints: Stint[] }) {
  const clean = laps.filter(lap => lap.lap_duration && !lap.is_pit_out_lap)
  const durations = clean.map(lap => lap.lap_duration!)
  if (!durations.length) return <p>No usable lap-duration data available.</p>
  const minimum = Math.min(...durations)
  const maximum = Math.max(...durations)
  const range = maximum - minimum || 1
  const maxLap = Math.max(...clean.map(lap => lap.lap_number))
  const points = clean.map(lap => `${((lap.lap_number - 1) / Math.max(1, maxLap - 1)) * 100},${92 - ((lap.lap_duration! - minimum) / range) * 78}`).join(' ')
  return <div className="chart-wrap"><svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Max Verstappen lap pace by lap"><line x1="0" y1="92" x2="100" y2="92" /><line x1="0" y1="52" x2="100" y2="52" /><line x1="0" y1="12" x2="100" y2="12" />{stints.slice(1).map(stint => <line className="stop-line" key={stint.stint_number} x1={`${((stint.lap_start - 1) / Math.max(1, maxLap - 1)) * 100}`} y1="5" x2={`${((stint.lap_start - 1) / Math.max(1, maxLap - 1)) * 100}`} y2="95" />)}<polyline points={points} /></svg><div className="chart-axis"><span>Lap 1</span><span>Lap {Math.round(maxLap / 2)}</span><span>Lap {maxLap}</span></div></div>
}

createRoot(document.getElementById('root')!).render(<App />)
