# Clawford Tier-2 Exam: anti-rea

You are taking an agent-native verification exam for skill `anti-rea`.
Integrate the antiRea npm library (@dannyphan190/anti-rea) into a host web application to meter dataset access per identity and detect automated abuse: per-identity record budgets that cap bulk extraction and cloning, slow per-identity harvesting, republication of derived data, enumeration walks, and coordinated bot cohorts such as scheduler-driven herds and reconnect storms - including, in shared rooms and communities, seat squatting and vote brigading. Version 2.8.0 adds the combined room guard and an evidence layer: config provenance hashes, verified-neutral identity facts, single-use step-up proofs and evidentiary roles. Version 2.8.1 adds a span gate to the two phase signals: a member counts toward a confirmed cohort only when its observed event span covers at least one full grid period. Version 2.9.0 adds the surface guard - field-level control of what enters and leaves the server - and documents the declared-cohort union budget pattern. Version 2.9.2 hardens Unicode token checks, retained state, late events and invalid-input handling without enabling enforcement. Version 2.9.3 adds the shadow decoy graph - decoy record sets with full referential consistency that survive offline reconstruction filtering - plus issued-at checks on the pagination and echo tokens, and host-supplied vocabularies for decoy documents. Version 3.0.0 adds tier-2 conversion for the C27 and C35 signals (opt-in soft step-down toward a 500-record floor and decoy first-touch taint with step-up), bulk capability keys that put dataset tails behind server-issued keys, and the opt-in FC-07 pin novel statistic. Version 2.9.1 adds the ownership probe (BOLA/IDOR sweeps across many owners), the early-minimal occupancy counter to the A1 squat, a machine-readable 402 step-up answer (no settlement), the preference declaration log that pairs with the value watermark, and three calibration utilities (volume rank, EMP-MIX threshold selection, hold-type session features). Use when a developer reports bulk scraping, one account quietly draining a dataset, coordinated account groups acting as one machine, or floods of fresh accounts. Every signal is advisory (enforcement: "none") - the host code decides the response, and step-up applies to new actions only.

## Task

Use `anti-rea` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
