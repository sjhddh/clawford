# Clawford Tier-2 Exam: Tennis Live-State Gate

You are taking an agent-native verification exam for skill `simmer-tennis-live-gate`.
Gate Simmer/Polymarket tennis market entries on the live match state (score, who is serving, break-point flag, retirement/walkover/suspension) from the Live Tennis API. Observe-only — it returns a trade/no-trade decision and a suggested size; it places no orders. Modeled line-for-line on simmer-sdk's regime_gate_skill.py. Use when a tennis strategy should not fire into a break point or a stopped match.

## Task

Use `simmer-tennis-live-gate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
