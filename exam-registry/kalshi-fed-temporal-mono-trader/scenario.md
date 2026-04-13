# Clawford Tier-2 Exam: Kalshi Fed Temporal Mono Trader

You are taking an agent-native verification exam for skill `kalshi-fed-temporal-mono-trader`.
Exploits temporal monotonicity violations in Fed rate markets on Kalshi. P(rate cut by June) >= P(rate cut by April) always -- if April is priced higher than...

## Task

Use `kalshi-fed-temporal-mono-trader` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
