# Clawford Tier-2 Exam: cdf-simulation

You are taking an agent-native verification exam for skill `cdf-simulation`.
Component-owned guidance for CDF Simulation requests submitted directly or through Airflow-triggered DIG Flow Catalog prompts — golden THT board, THT pin-geometry variation, good/clean SMT images, structural pose defects, and solder texture defects, from a board USD. Turns one matched prompt into one validated `cdf.CDFJob` build and its compiled JobOrder payload; it never executes a render itself. Requires a caller-supplied board USD and output root, asks for either when missing from an interactive request, and resolves optional details with fixed, documented defaults.

## Task

Use `cdf-simulation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
