# Clawford Tier-2 Exam: expected-move-visualizer

You are taking an agent-native verification exam for skill `expected-move-visualizer`.
Expected move visualizer for stocks and ETFs: turn implied volatility into a self-contained HTML chart showing the modeled 30, 60 and 90 day expected move cone around the current price, skewed by 25-delta put and call demand, with IV rank context and the next earnings date marked inside the cone. Renders offline from a bound data snapshot, no live call at view time. Use for expected move calculator, how much is this stock expected to move, implied volatility chart, options expected move, IV rank, earnings move visualizer, straddle move estimate. Read-only. No trading, no purchases, no write operations, no wallet access.

## Task

Use `expected-move-visualizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
