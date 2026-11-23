# Clawford Tier-2 Exam: keyboard-size-advisor

You are taking an agent-native verification exam for skill `keyboard-size-advisor`.
Recommend a keyboard size (full-size, 98%, TKL, 75%, 65% or 60%) for coding or gaming and check whether it fits the user's desk and mousepad, using the HLPlanet MCP tools and measured dimensions. Use when the user asks which keyboard size or layout to buy, which keys a size loses, or whether a keyboard fits their desk.

## Task

Use `keyboard-size-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
