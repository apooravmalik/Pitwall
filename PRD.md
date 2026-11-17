Product Requirements Document (PRD)

PitWall — Learn Formula 1 and Lead a Team

Version: 1.1
Status: Draft — Discovery and Technical Validation
Date: November 17, 2026
Product Type: Mobile-first F1 learning companion, race strategy simulator, and future team-principal career game
Initial Platform: Progressive Web App (PWA)
Primary Data Source: OpenF1, subject to applicable licensing
Initial Release: Historical Race Strategy Replay
Long-Term Vision: An accessible F1 learning platform with live intelligence and a data-informed team-principal career game

---

1. Executive Summary

PitWall is an interactive Formula 1 learning and race-intelligence platform designed to help beginners understand the strategies, decisions, and performance factors influencing a Grand Prix.

At first glance, Formula 1 can look like cars simply circulating a track. PitWall makes the hidden sporting and technical decisions visible: tyre choices, pit windows, traffic, weather, safety cars, car setup, and the trade-offs that teams make to score points and win championships.

While traditional F1 broadcasts focus on race coverage and existing companion applications visualize car positions, timing, and telemetry, PitWall will focus on interpreting racing strategy.

The platform will use historical and eventually live motorsport data to reconstruct race conditions, analyze tyre strategies, simulate alternative pit-stop decisions, and explain potential outcomes.

Users will be able to select a driver, examine their current race situation, and explore questions such as:

- When is Verstappen likely to make his next pit stop?
- Would an undercut against Leclerc be effective?
- What happens if a driver stays out for three additional laps?
- Which tyre compound offers the strongest projected finish?
- How did this team's previous strategies at Silverstone compare?
- Is a driver losing time because of tyre degradation, traffic, or another factor?

The initial MVP will focus on completed races to validate the strategy engine against historical outcomes and teach the fundamentals through real examples.

Live race support will follow after the prediction methodology, data rights, and streaming architecture have been validated. A later Team Principal career mode will let users apply what they learn by running a team through a season.

Product vision

Help every new fan understand Formula 1, then give them the confidence to think like a race strategist and team principal.

Core value proposition

PitWall transforms race data into understandable lessons, interactive strategy insights, and, later, meaningful team-management decisions.

Rather than simply displaying what is happening, it helps fans explore why decisions matter and what could happen next.

---

2. Problem Statement

2.1 Current experience

Formula 1 broadcasts provide live timing, position changes, tyre information, and commentary.

However, the reasoning behind team strategy decisions is often difficult for casual viewers to understand.

Important factors such as tyre degradation, pit-stop timing, traffic, undercuts, overcuts, and safety-car opportunities interact dynamically throughout a race.

Broadcasters may discuss these factors, but viewers generally cannot independently test alternative strategies or explore their implications.

Existing timing and visualization applications provide valuable information but do not necessarily offer accessible, interactive strategy simulation.

For beginners, the barrier is broader than strategy: it is difficult to see how technical car choices, sporting regulations, race operations, and season-long championship goals connect to the on-track action.

2.2 User pain points

1. Fans cannot easily determine why a driver is approaching a pit window.
2. Broadcast commentary may not explain the mathematical reasoning behind a strategy.
3. Viewers have limited tools to explore alternative pit-stop decisions.
4. Tyre performance and degradation are difficult to interpret.
5. Historical race strategies are not easily accessible in an interactive format.
6. Race timing and telemetry are often presented without contextual explanations.
7. Companion applications may be out of sync with television broadcasts.
8. Existing data-analysis tools can be too technical for casual viewers.
9. New fans have few safe, guided ways to practise decisions and learn from their consequences.

2.3 Proposed solution

PitWall will provide a synchronized race intelligence interface containing:

- Driver and race-state information.
- Tyre and stint analysis.
- Pit-window estimates.
- Undercut and overcut analysis.
- Interactive strategy simulation.
- Historical strategy comparisons.
- Explainable predictions.
- Eventually, personalized live race alerts.
- Guided, beginner-friendly explanations of F1 concepts in the context of real race moments.
- In a future release, a Team Principal career mode that turns these concepts into decisions across a season.

The system will distinguish observed race data from calculated estimates and probabilistic predictions.

---

3. Product Goals

Primary goals

G1 — Beginner-first Formula 1 education

Make Formula 1 understandable to fans without prior motorsport knowledge, using real race situations to explain strategy, tyres, car behaviour, regulations, and championship objectives.

G2 — Historical race reconstruction

Recreate race state at any supported lap using historical telemetry and event data.

G3 — Interactive what-if analysis

Allow users to simulate alternative pit-stop decisions and compare projected outcomes.

G4 — Explainable intelligence

Provide clear explanations for strategy calculations, including assumptions and uncertainty.

G5 — Measurable prediction quality

Develop models whose predictions can be evaluated against unseen historical races.

G6 — Learn by leading a team (future)

Let users apply their knowledge in a Team Principal career mode, making technical and race decisions to compete for the Constructors' Championship.

Secondary goals

- Provide live race intelligence.
- Predict likely pit-stop windows.
- Identify undercut and overcut opportunities.
- Explain tyre degradation patterns.
- Deliver relevant race alerts.
- Build a future team-management game grounded in real-world F1 concepts and historical data.
- Support additional motorsport series in the future.

Non-goals for MVP

The initial release will not:

- Build a complete 3D race visualization engine.
- Replicate Outlap's proprietary software.
- Predict exact team decisions with certainty.
- Claim access to private team strategy information.
- Provide real-time telemetry during live races.
- Offer betting recommendations.
- Guarantee that hypothetical race outcomes would have occurred.
- Reproduce copyrighted broadcast footage.

---

4. Target Audience

Persona A — Casual F1 viewer

Profile: Watches Formula 1 races on television or streaming services.

Motivation: Wants to understand why teams make particular strategy decisions.

Needs:

- Simple explanations.
- Clear tyre information.
- Driver-focused insights.
- Minimal technical terminology.
- Mobile-friendly experience.

Persona A1 — New F1 fan

Profile: Has recently started watching Formula 1 and sees the cars racing but does not yet understand the sport beneath the surface.

Motivation: Wants a welcoming way to learn what teams are deciding, why it matters, and how points and championships work.

Needs:

- Plain-language, contextual explanations.
- A progressive path from basic concepts to strategy.
- The ability to experiment without needing technical knowledge first.
- Feedback that explains the outcome of a decision.

Persona B — Dedicated F1 fan

Profile: Follows qualifying, race strategy, driver performance, and championship standings.

Motivation: Wants to explore race scenarios independently.

Needs:

- Detailed pit-stop analysis.
- Historical strategy comparisons.
- Tyre degradation estimates.
- Race position projections.
- What-if simulations.

Persona C — Motorsport data enthusiast

Profile: Interested in telemetry, predictive modelling, and motorsport analytics.

Motivation: Wants to understand the calculations behind race strategy.

Needs:

- Model assumptions.
- Prediction confidence.
- Historical validation.
- Interactive charts.
- Transparent calculations.

Persona D — Content creator

Profile: Produces Formula 1 analysis, commentary, or educational content.

Motivation: Wants to explain race strategy using visual data.

Needs:

- Shareable strategy summaries.
- Historical comparisons.
- Understandable visualizations.
- Source attribution.

Persona E — Aspiring team principal (future)

Profile: Enjoys management and simulation games and wants to run an F1 team through a season.

Motivation: Wants to make meaningful car-setup, race-strategy, and resource decisions, then see their effect on the Constructors' Championship.

Needs:

- Clear trade-offs rather than opaque game mechanics.
- Car-configuration choices appropriate to each circuit.
- Race-day decision making using the same concepts taught in PitWall.
- A season progression, standings, and post-race feedback.

---

5. Core User Experience

5.1 Historical race replay

The user opens PitWall and selects a completed Formula 1 race.

Example:

- Season: 2025
- Event: British Grand Prix
- Circuit: Silverstone
- Session: Race

The system loads historical race data.

The user can move through the race using a lap selector or playback timeline.

At any selected point, the application displays the race state known up to that moment.

This includes:

- Driver positions.
- Gaps and intervals.
- Tyre compounds.
- Stint lengths.
- Completed pit stops.
- Recent lap times.
- Weather conditions.
- Race-control events.

The user can pause the race and explore possible future strategies.

5.2 Driver strategy view

The user selects a driver.

The interface displays:

- Current position.
- Current tyre compound.
- Tyre age.
- Completed pit stops.
- Recent lap pace.
- Gap ahead and behind.
- Estimated pit-stop loss.
- Potential pit windows.
- Nearby competitors.

The application explains why a pit stop may or may not be advantageous.

5.3 What-if strategy simulation

The user selects a possible action:

- Pit on the next lap.
- Stay out for three laps.
- Stay out for six laps.
- Change tyre compound.

The simulator estimates:

- Expected pit-cycle time.
- Potential rejoining position.
- Traffic exposure.
- Remaining stint performance.
- Projected race time.
- Relative advantage or disadvantage against selected competitors.

The interface displays uncertainty ranges rather than treating the result as guaranteed.

5.4 Strategy comparison

Users can compare multiple scenarios side by side.

Example:

Scenario A: Pit on lap 29 for hard tyres.

Scenario B: Pit on lap 32 for hard tyres.

Scenario C: Pit on lap 35 for medium tyres.

Each scenario includes projected race time, pit-cycle position, and key risks.

5.5 Live companion experience — Future release

During a live Grand Prix, users can follow selected drivers and receive strategy insights.

The interface will include a synchronization control to align race data with the user's television broadcast.

Users may receive alerts about:

- Approaching pit windows.
- Potential undercuts.
- Changing tyre performance.
- Safety-car strategy opportunities.
- Significant changes in predicted race outcomes.

5.6 Team Principal career mode — Future release

After learning with historical races and the Strategy Lab, a user can begin a career as a fictional or appropriately licensed team principal. Their objective is to outperform rival teams and win the Constructors' Championship over a season.

Before each event, the player makes understandable high-level car and operational choices, for example:

- Choose a circuit-appropriate aerodynamic setup, such as higher downforce for cornering grip or lower downforce for straight-line speed.
- Balance reliability, pace, tyre management, and development priorities.
- Select race objectives and initial tyre plans.

During a race, the player makes decisions such as pit timing, tyre compound, response to traffic, and reaction to safety cars. The game uses real historical race and circuit data to inform baselines, conditions, and teaching moments, while a simulation determines the alternate career outcome.

After every race, PitWall explains the results: what the player chose, the trade-offs involved, which decisions helped or hurt, and their championship impact. This is an educational simulation, not a claim that an alternate decision would reproduce a real F1 result.

---

6. Functional Requirements

FR-01: Historical race data ingestion

Priority: P0

The system shall retrieve supported historical race data from OpenF1 or another authorized provider.

Required categories:

Data| Purpose
Sessions| Identify race events
Drivers| Driver and team identification
Laps| Pace and lap-time analysis
Stints| Tyre strategy reconstruction
Pit stops| Pit-stop timing and pit-loss estimation
Intervals| Gap analysis
Positions| Track-position changes
Weather| Environmental conditions
Race control| Safety-car, flag and race-state changes
Car telemetry| Optional advanced performance analysis

Acceptance criteria:

- Users can select a supported historical race.
- Data is normalized into consistent internal schemas.
- Missing fields are explicitly identified.
- Duplicate and invalid records are handled.
- Source attribution is retained.
- Failed ingestion can be retried.

FR-02: Historical race-state reconstruction

Priority: P0

The system shall reconstruct the race state at a selected timestamp or lap boundary.

The reconstructed state shall include:

- Current running order.
- Completed laps.
- Gaps between drivers.
- Current tyre compounds.
- Tyre age.
- Completed pit stops.
- Recent pace.
- Race-control status.

Acceptance criteria:

- The user can select a supported point in the race.
- The displayed state is based only on data available up to that point.
- Historical future events are not leaked into predictions.
- Race-control events are reflected in the reconstructed state.
- Missing information is clearly marked.

FR-03: Tyre stint analysis

Priority: P0

The system shall reconstruct each driver's tyre strategy using stint and pit-stop data.

Required information:

- Tyre compound.
- Stint start and end.
- Tyre age where available.
- Number of completed stops.
- Lap-time trends.
- Estimated pace changes.

Acceptance criteria:

- Users can view each driver's tyre history.
- Stint transitions are correctly represented.
- Pace trends can be compared across stints.
- Tyre degradation estimates are labelled as estimates.
- The application does not automatically attribute every pace loss to tyre wear.

FR-04: Pit-stop loss estimation

Priority: P0

The system shall estimate the race-time cost of making a pit stop.

The calculation should account for:

- Circuit-specific pit-lane time loss.
- Historical pit-stop durations.
- Green-flag versus safety-car conditions.
- Available traffic and position information.

Acceptance criteria:

- The model provides an estimated pit-cycle time loss.
- The estimate identifies its underlying assumptions.
- Historical observed pit losses can be compared against estimates.
- The system provides an uncertainty range where supported.

FR-05: What-if strategy engine

Priority: P0

The system shall simulate alternative pit-stop decisions from a selected historical race state.

User-controlled inputs:

- Driver.
- Proposed pit lap.
- Next tyre compound.
- Optional selected rival.

Model outputs:

- Estimated pit-cycle loss.
- Projected rejoining position.
- Remaining-race time estimate.
- Potential undercut or overcut advantage.
- Confidence or uncertainty interval.

Acceptance criteria:

- Users can run at least three strategy alternatives.
- Scenarios are calculated from the same race-state snapshot.
- Future historical outcomes are excluded from model inputs.
- Calculations are reproducible.
- Uncertainty is displayed.
- Unsupported scenarios produce explanations rather than misleading results.

FR-06: Undercut and overcut analysis

Priority: P1

The system should estimate whether an earlier or later pit stop could provide a time advantage over a selected competitor.

Required inputs:

- Current gap.
- Recent lap pace.
- Tyre age.
- Expected pit loss.
- Predicted pace on new tyres.
- Expected pace on existing tyres.
- Traffic conditions.

Acceptance criteria:

- The user can select two drivers.
- The system can compare early-stop and late-stop scenarios.
- The result includes estimated time gained or lost.
- The explanation identifies the main factors affecting the estimate.

FR-07: Historical strategy comparison

Priority: P1

The system should provide historical strategy context for a selected circuit.

Possible comparisons:

- Common pit-stop laps.
- Tyre compound sequences.
- Number of pit stops.
- Historical pit-lane loss.
- Safety-car influence.
- Winning and alternative strategies.

Historical comparisons must account for changing regulations, tyre specifications, and race conditions.

Acceptance criteria:

- Users can inspect previous supported races at the same circuit.
- The interface identifies the season and conditions.
- Data from incompatible eras is not treated as directly equivalent without qualification.
- Historical patterns are presented as context rather than deterministic predictions.

FR-08: Prediction explanation engine

Priority: P0

The system should generate understandable explanations for strategy estimates.

Explanations must be grounded in structured model outputs.

An optional LLM may convert model results into natural-language summaries.

Acceptance criteria:

- Every explanation references relevant measured or calculated factors.
- The LLM does not invent telemetry or probabilities.
- Uncertainty is communicated.
- Users can inspect the assumptions behind the explanation.
- A deterministic explanation fallback exists when the LLM is unavailable.

FR-15: Contextual beginner learning

Priority: P0

The system shall teach core Formula 1 concepts within the relevant race view or strategy scenario, so beginners can understand decisions before being asked to make them.

Initial concepts include:

- Tyre compounds, tyre age, and degradation.
- Pit stops, pit loss, undercuts, and overcuts.
- Track position, traffic, safety cars, and race-control effects.
- Points and the Drivers' and Constructors' Championships.
- The basic high-downforce versus low-downforce trade-off.

Acceptance criteria:

- An unfamiliar term has an accessible plain-language explanation from its relevant screen.
- Each explanation connects the concept to the current race state or scenario, rather than presenting it only as a glossary entry.
- Users can opt into more technical detail without blocking the primary explanation.
- The lesson clearly separates observed fact, model estimate, prediction, and game simulation where applicable.

FR-09: Mobile race dashboard

Priority: P0

The application shall provide a responsive mobile-first interface.

Required components:

- Race selector.
- Driver selector.
- Race timeline.
- Position table.
- Tyre stint chart.
- Gap information.
- Strategy simulator.
- Scenario results.
- Explanations.

Acceptance criteria:

- The interface works on common mobile screen sizes.
- Core controls are usable with touch.
- Historical race state can be navigated without a page reload.
- Loading and error states are visible.
- Charts remain readable on narrow screens.

FR-10: Live race ingestion

Priority: P2 — Post-MVP

The system may consume authorized live race data.

Required capabilities:

- Continuous data ingestion.
- Race-state updates.
- Reconnection handling.
- Event ordering.
- Data freshness monitoring.
- Live versus delayed state identification.

Acceptance criteria:

- Live updates are reflected without manual refresh.
- Connection interruptions are handled.
- The interface displays stale-data warnings.
- Users are not shown predictions based on outdated race state without disclosure.

FR-11: TV synchronization

Priority: P2

The application should allow users to align race information with their television or streaming broadcast.

Initial approach:

- Manual delay adjustment.
- Pause and resume.
- Jump to a known race event.
- Adjustable replay offset.

Acceptance criteria:

- Users can delay race-state playback.
- Predictions and alerts use the synchronized timeline.
- Future events are not revealed ahead of the selected playback position.
- Synchronization settings can be adjusted during a session.

FR-12: Pit-stop prediction

Priority: P2

The system should estimate the probability of a driver making a pit stop within a defined future lap window.

Example outputs:

- Probability of pitting within three laps.
- Most likely pit window.
- Likely next tyre compound.
- Factors contributing to the prediction.

Acceptance criteria:

- Predictions use only information available at prediction time.
- Probabilities are calibrated against held-out historical races.
- Model confidence is evaluated.
- Unsupported situations produce an unavailable prediction rather than a fabricated percentage.

FR-13: Personalized race alerts

Priority: P2

Users should be able to follow selected drivers and receive relevant race intelligence alerts.

Possible alerts:

- Driver entering a predicted pit window.
- Potential undercut opportunity.
- Rival entering pit lane.
- Significant pace degradation.
- Safety-car strategy opportunity.

Acceptance criteria:

- Users can select followed drivers.
- Duplicate alerts are suppressed.
- Alerts respect the selected broadcast delay.
- Users can disable individual alert categories.

FR-14: Team Principal career mode

Priority: P3 — Future release

The system should offer a season-based management simulation in which a player leads a team and competes for the Constructors' Championship.

Player decisions shall include:

- High-level circuit setup choices, including aerodynamic balance or downforce level.
- Development and reliability priorities.
- Pre-race tyre and strategy planning.
- In-race pit-stop, tyre, and safety-car decisions.

The career simulation shall use documented, versioned rules and data-informed circuit and race baselines. It must distinguish real historical facts from simulated outcomes and must not present fictional team, driver, or championship results as historical data.

Acceptance criteria:

- A player can start, continue, and complete a season.
- Before a race, the game explains the expected benefits and costs of each available car-setup choice.
- In-race decisions affect a simulated result and are followed by an understandable explanation.
- Championship standings update after each simulated race.
- Post-race feedback links outcomes to relevant F1 concepts, including downforce, tyre performance, pit timing, traffic, or reliability.
- The interface clearly labels game outcomes as simulated.

---

7. Prediction and Simulation Methodology

7.1 Modelling principles

PitWall will separate three different analytical tasks.

Descriptive analysis

What has happened so far?

Examples: tyre age, current gaps, completed pit stops.

Counterfactual simulation

What might happen if a driver makes a different strategy decision?

Examples: pit now versus stay out.

Predictive modelling

What is likely to happen next?

Examples: probability of a pit stop within three laps.

These outputs must not be confused.

Career-game simulation

What are the educational consequences of a player's team-management decisions over a race or season?

Examples: choosing a higher-downforce setup for Monaco, prioritising reliability over peak pace, or responding to a safety car. This mode may use real data as a baseline, but its generated outcomes are always simulated.

7.2 Initial deterministic model

The MVP will use a rules-based and mathematical strategy simulator.

A simplified projected race-time model is:

Projected race time = Remaining time on current tyres + Pit-cycle loss + Remaining time on replacement tyres

The model should account for:

- Estimated lap pace.
- Tyre degradation.
- Pit-stop loss.
- Track position.
- Traffic effects.
- Weather and race-control conditions where available.

7.3 Tyre degradation modelling

The system may estimate pace trends using recent clean-air lap times.

A baseline model could use:

[
T_{\text{lap}}(a)=\beta_0+\beta_1a+\beta_2a^2
]

Where:

- (a) = tyre age.
- (T_{\text{lap}}) = estimated lap time.
- (\beta_0,\beta_1,\beta_2) = fitted parameters.

Additional variables may include fuel load, weather, traffic, and track evolution.

The system must not assume a quadratic relationship is always appropriate.

7.4 Monte Carlo simulation

Later versions may simulate multiple possible race outcomes.

Uncertain variables could include:

- Tyre degradation.
- Pit-stop duration.
- Traffic delays.
- Weather changes.
- Competitor strategy.
- Safety-car scenarios.

The output may include:

- Median projected race time.
- Prediction interval.
- Probability of gaining a position.
- Probability of a strategy outperforming an alternative.

Probabilities must be based on validated assumptions rather than arbitrary scores.

7.5 Pit-stop prediction model

A future predictive model may use:

- Logistic regression.
- Gradient-boosted decision trees.
- Survival analysis.
- Time-to-event modelling.

Candidate features:

- Tyre age.
- Tyre compound.
- Recent lap pace.
- Gap ahead.
- Gap behind.
- Estimated pit loss.
- Race lap.
- Remaining race distance.
- Weather.
- Race-control state.
- Previous strategy patterns.

The model will predict defined outcomes, such as whether a driver pits within the next three laps.

7.6 Model evaluation

Historical races shall be separated chronologically for training and evaluation.

The system must prevent future information from leaking into earlier race-state predictions.

Evaluation metrics may include:

Task| Metrics
Pit-stop probability| Brier score, log loss, calibration
Pit-window prediction| Mean absolute lap error
Pit-loss estimation| Mean absolute error in seconds
Lap-pace forecasting| MAE and prediction-interval coverage
Position projection| Position error and scenario coverage
Strategy comparison| Historical backtesting and sensitivity analysis

No prediction model should be described as accurate until these metrics are measured on unseen races.

---

8. Technical Architecture

8.1 System overview

              DATA SOURCES
                   |
          OpenF1 / Licensed Feed
                   |
                   v
             Ingestion Layer
                   |
                   v
          Validation + Storage
                   |
                   v
            Race State Engine
                   |
          +--------+--------+
          |                 |
          v                 v
    Historical Store   Live State Store
          |                 |
          +--------+--------+
                   |
                   v
           Strategy Engine
          /        |        \
         v         v         v
    Pit Model   Tyre Model   What-if
         \         |         /
          +--------+--------+
                   |
                   v
          Prediction Results
                   |
                   v
          Explanation Engine
                   |
                   v
             Backend API
                   |
                   v
           Mobile-first PWA

8.2 Proposed technology stack

Component| Technology
Backend| Python + FastAPI
Data processing| Pandas, NumPy, SciPy
Predictive models| scikit-learn, XGBoost or LightGBM
Database| PostgreSQL
Local MVP database| SQLite
Caching| Redis, when needed
Frontend| Next.js + TypeScript
Styling| Tailwind CSS
Charts| Recharts or ECharts
Live communication| WebSocket
Background processing| Worker queue, when needed
Testing| Pytest, Playwright
Deployment| Containerized backend + web hosting

8.3 Recommended architecture for MVP

The first version should remain relatively simple:

- One Python backend.
- One database.
- One historical data ingestion pipeline.
- One deterministic strategy engine.
- One Next.js frontend.

Redis, distributed workers, and complex streaming infrastructure should be introduced only when justified by actual load.

---

9. Data Model

Core entities

Race

- race_id
- season
- event_name
- circuit_id
- start_time
- total_laps

Driver

- driver_id
- name
- team
- driver_number

RaceState

- race_id
- timestamp
- lap_number
- race_control_status
- weather_state

DriverState

- race_id
- driver_id
- timestamp
- position
- gap_ahead
- gap_behind
- tyre_compound
- tyre_age
- current_stint
- recent_pace

Lap

- race_id
- driver_id
- lap_number
- lap_time
- validity_flags

PitStop

- race_id
- driver_id
- pit_lap
- pit_duration
- pit_loss_estimate

StrategyScenario

- scenario_id
- race_state_id
- driver_id
- proposed_pit_lap
- proposed_compound
- model_version

Prediction

- prediction_id
- scenario_id
- predicted_outcome
- uncertainty
- assumptions
- created_at

ModelEvaluation

- model_version
- evaluation_period
- metric_name
- metric_value

All race-state records should retain source timestamps and ingestion timestamps to support reproducibility.

---

10. User Interface Requirements

Screen 1 — Race selection

Users select a season and race.

Display:

- Event name.
- Circuit.
- Date.
- Race status.
- Data availability.

Screen 2 — Race overview

Display:

- Current lap.
- Driver positions.
- Gaps.
- Tyre compounds.
- Pit-stop count.
- Race-control status.

Screen 3 — Driver intelligence

Display:

- Selected driver.
- Current position.
- Tyre age.
- Recent pace.
- Gap ahead and behind.
- Pit-window analysis.
- Strategy explanation.

Screen 4 — Strategy lab

Interactive controls:

- Pit lap.
- Replacement tyre.
- Selected rival.
- Scenario comparison.

Outputs:

- Projected race time.
- Estimated pit-cycle position.
- Strategy advantages and risks.
- Uncertainty ranges.

Screen 5 — Historical comparison

Display:

- Previous race strategies.
- Tyre stint distributions.
- Typical pit windows.
- Pit-loss comparisons.
- Historical outcomes.

Screen 6 — Live race companion (future)

Display:

- Synchronized race timeline.
- Followed drivers.
- Strategy alerts.
- Current predictions.
- Data freshness status.

Screen 7 — Team Principal HQ (future)

Display:

- Team identity, season progress, budget or development resources where included, and Constructors' Championship standing.
- The next circuit's characteristics and a plain-language setup briefing.
- Car setup choices, including downforce trade-offs.
- Pre-race strategy plan and simulated race-day decision controls.
- A post-race debrief explaining the result and what the player learned.

---

11. Non-Functional Requirements

Performance

Initial targets:

- Historical race selection should load within 3 seconds when data is cached.
- A single what-if scenario should calculate within 2 seconds.
- Mobile interactions should remain responsive during simulation.
- Historical replay should not require continuous API calls after the necessary race data is loaded.

Reliability

- Missing telemetry must not crash the application.
- The system must handle incomplete race sessions.
- Historical race reconstruction must be reproducible.
- Predictions must retain model version and input state.
- Data-source outages must produce clear error messages.

Security

- API credentials must remain server-side.
- Public endpoints must be rate-limited.
- User inputs must be validated.
- Third-party data must be treated as untrusted.
- Administrative functions must require authorization.

Privacy

- The MVP should not require user accounts.
- Personal analytics should be opt-in.
- Future notification preferences must be user-controlled.
- Users should be able to delete stored preferences.

Accessibility

- The mobile interface must support keyboard navigation where applicable.
- Charts should include textual summaries.
- Colour must not be the sole indicator of tyre compound or status.
- Interactive controls must be usable on mobile devices.

---

12. Data Licensing and Legal Considerations

OpenF1 provides historical and live motorsport data under specific access conditions.

The product must verify:

- Whether historical data can be used in a publicly distributed application.
- Whether commercial use requires separate authorization.
- Whether live data can be redistributed to end users.
- Attribution requirements.
- Rate limits and usage restrictions.
- Restrictions concerning Formula 1 branding and trademarks.

A public, non-commercial prototype does not automatically have unrestricted rights to redistribute third-party data.

PitWall should initially use its own branding and avoid suggesting official Formula 1 affiliation.

Any use of team logos, driver photographs, circuit imagery, or broadcast media must be reviewed separately.

---

13. Product Roadmap

Phase 0 — Feasibility and research

Estimated duration: 1 week

Deliverables:

- OpenF1 data availability assessment.
- Licensing review.
- One historical race dataset.
- Initial race-state schema.
- Strategy-model assumptions.

Exit criteria: A completed race can be reconstructed from legally usable data with sufficient completeness.

Phase 1 — Historical race intelligence MVP

Estimated duration: 2 weeks

Deliverables:

- Historical race ingestion.
- Driver standings and intervals.
- Tyre stint visualization.
- Pit-stop history.
- Race timeline.
- Driver intelligence screen.

Exit criteria: A user can navigate a completed race and understand the race state at a selected lap.

Phase 2 — What-if strategy simulator

Estimated duration: 2 weeks

Deliverables:

- Pit-loss estimation.
- Tyre pace model.
- Alternative pit-lap selection.
- Replacement compound selection.
- Projected race-time comparison.
- Assumptions and uncertainty display.

Exit criteria: A user can compare at least three strategy alternatives.

Phase 3 — Validation and public alpha

Estimated duration: 1–2 weeks

Deliverables:

- Historical backtesting.
- Error analysis.
- Mobile usability testing.
- Model limitations documentation.
- Public demo deployment.

Exit criteria: The system has measured performance on unseen historical race scenarios and can be used by external testers.

Phase 4 — Live race companion

Estimated duration: To be determined after licensing and infrastructure validation

Deliverables:

- Authorized live feed integration.
- Streaming race-state engine.
- Broadcast synchronization.
- Live strategy dashboard.
- Data freshness monitoring.

Phase 5 — Predictive intelligence

Deliverables:

- Calibrated pit-stop probability model.
- Pit-window predictions.
- Strategy alerts.
- Model explanations.
- Continuous model evaluation.

Phase 6 — Advanced fan experience

Potential features:

- Multi-driver strategy comparisons.
- Safety-car scenario simulator.
- Historical strategy storytelling.
- Shareable strategy cards.
- Personalized driver following.
- Optional 3D race visualization integration.

Phase 7 — Team Principal career game

Deliverables:

- A documented season-simulation ruleset.
- Circuit briefing and high-level car-setup decisions, including downforce trade-offs.
- Pre-race planning and in-race decision events.
- Constructors' Championship progression and post-race learning debriefs.
- Clear separation of historical data from game-generated results.

Exit criteria: A player can complete a short simulated season, understand the consequences of their decisions, and pursue the Constructors' Championship without mistaking the game results for real F1 history.

---

14. Success Metrics

Primary product metric

Strategy Exploration Rate

Percentage of users who successfully run at least one what-if strategy simulation after opening a race.

Initial alpha target: 50%.

Educational activation metric

Concept Understanding Rate: percentage of guided testers who can correctly explain a strategy or car-setup trade-off after using a relevant PitWall lesson or simulation. Initial target: establish a baseline during alpha.

Supporting metrics

Metric| Initial target
Historical race load success| 95% for supported races
What-if simulation completion| 95% of valid requests
Cached race load time| Under 3 seconds
Simulation response time| Under 2 seconds
External alpha testers| 10
Users completing a strategy comparison| 70% of guided testers
Critical data-state inconsistencies| Zero in release test scenarios

Prediction quality metrics

Predictive model targets will be established after measuring baseline performance.

The system should not claim a particular accuracy percentage without evaluation.

Qualitative validation

Ask testers:

- Did the application help you understand the race better?
- Was the strategy comparison easy to use?
- Did you understand why a scenario was recommended?
- Were the uncertainty and assumptions clear?
- Would you use the application while watching a live Grand Prix?

---

15. Risks and Mitigation

Risk| Severity| Mitigation
Data licensing restrictions| High| Validate rights before public release
Missing historical telemetry| High| Data completeness checks and graceful fallback
Inaccurate tyre degradation| High| Use multiple variables and disclose uncertainty
Prediction leakage from future events| High| Strict timestamp-based feature construction
Inaccurate strategy projections| High| Historical backtesting and confidence intervals
TV broadcast delay| Medium| Manual synchronization controls
Changes in F1 regulations| High| Season-aware modelling and validation
Live feed interruption| Medium| Reconnection and stale-data warnings
Complex user interface| Medium| Progressive disclosure of advanced information
Existing competitors| Medium| Focus on explainable interactive strategy simulation
Uncertain monetization| Medium| Validate engagement before introducing paid features
Career game becomes too complex| Medium| Start with a short season and a small set of transparent, meaningful decisions
Game outcomes misrepresented as real F1| High| Prominently label simulations and retain source attribution for historical inputs

---

16. MVP Scope and Release Criteria

Included in MVP

- Historical race selection.
- Historical race-state reconstruction.
- Driver selection.
- Tyre stint visualization.
- Pit-stop history.
- Basic pace analysis.
- Deterministic what-if strategy simulator.
- Comparison of multiple pit strategies.
- Explanation of model assumptions.
- Contextual explanations of core F1 and strategy concepts.
- Mobile-first responsive interface.

Excluded from MVP

- Live race streaming.
- Push notifications.
- Calibrated ML pit-stop prediction.
- Automatic TV synchronization.
- 3D car visualization.
- User accounts.
- Paid subscriptions.
- Social features.
- Team Principal career mode and season management.

Definition of done

The MVP is complete when a user can:

1. Open a supported historical Formula 1 race.
2. Select a driver and lap.
3. View the race situation at that moment.
4. Inspect the driver's tyre strategy.
5. Choose an alternative pit lap and tyre compound.
6. Run a strategy simulation.
7. Compare the simulated scenario with another strategy.
8. Understand the estimated outcome and its limitations.
9. Understand at least one relevant F1 concept through the race context, such as an undercut, tyre degradation, or pit loss.

---

17. Open Questions

The following questions require resolution before implementation:

1. Which data licensing arrangement will permit the intended public release?
2. Which historical race should serve as the first reference dataset?
3. How should the model estimate tyre degradation when clean-air laps are limited?
4. What assumptions should be used for competitor pit-stop decisions?
5. How should safety-car scenarios be represented?
6. How should race interruptions and unusual pit events be handled?
7. Should the initial app support one driver or multiple simultaneous strategy comparisons?
8. Should users be able to save and share simulated scenarios?
9. Which live data provider will be used for the production application?
10. How will prediction calibration be communicated to casual viewers?
11. Which Team Principal decisions are both educational and feasible to simulate credibly in the first game release?
12. How should the career game use fictional, licensed, or user-created teams and drivers while respecting F1 intellectual property?
13. What historical data can legally be used as a baseline for a public game experience?

---

18. Future Business Opportunities

PitWall will initially be developed as a fan-focused technical project.

Potential future business models include:

Freemium companion

Free race-state information with advanced strategy analysis as an optional paid feature, subject to data rights.

Premium historical analysis

Advanced race strategy comparisons and deeper historical modelling.

Creator tools

Shareable strategy visualizations for motorsport educators and content creators.

Educational game mode

A premium or classroom-friendly Team Principal career experience, subject to data, branding, and licensing rights.

Developer API

Authorized access to derived strategy calculations and simulation tools.

Motorsport expansion

Support for other racing series where appropriate telemetry and licensing are available.

These are opportunities for validation, not confirmed revenue models.

---

19. Recommended First Implementation

The initial engineering proof of concept should focus on one completed Grand Prix.

Suggested test event: 2025 British Grand Prix.

Deliverable A — Historical reconstruction

Retrieve and display:

- Race positions.
- Driver lap times.
- Tyre stints.
- Pit stops.
- Gaps.
- Race-control events.

Deliverable B — Strategy model

At a selected race lap:

- Estimate pit-stop loss.
- Estimate remaining stint pace.
- Simulate an earlier pit stop.
- Simulate a later pit stop.
- Compare projected outcomes.

Deliverable C — Mobile interface

Build a responsive application containing:

- Race timeline.
- Driver strategy card.
- Tyre stint chart.
- What-if controls.
- Scenario comparison.

Deliverable D — Validation

Test the model on other historical races without using their future outcomes as inputs.

Document:

- Model assumptions.
- Prediction errors.
- Missing data.
- Scenarios where the model performs poorly.

---

20. Final Product Principle

PitWall should be built around three ideas:

Understand the race. Present the important information behind strategy decisions.

Explore the alternatives. Allow fans to test hypothetical decisions interactively.

Explain the uncertainty. Distinguish observed data, calculated estimates, and predictions.

The goal is not to replace Formula 1 broadcasts or existing race visualization applications.

It is to create an intelligent companion that makes every Grand Prix more interactive, educational, and strategically engaging.

PitWall — Think Like the Pit Wall.
