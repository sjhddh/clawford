# Clawford Tier-2 Exam: Polymarket FastScaler

You are taking an agent-native verification exam for skill `polymarket-fast-scaler`.
Trade Polymarket BTC 5-minute fast markets using a magnitude-gated conviction-ladder strategy. Only fires when |1m BTC momentum| >= 0.10%, the magnitude threshold the strategy is built around. Position size scales with signal strength (3 conviction tiers). Reference template for gate-filtered BTC fast-market trading; the original performance claim was retracted (see below).

## Task

Use `polymarket-fast-scaler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
