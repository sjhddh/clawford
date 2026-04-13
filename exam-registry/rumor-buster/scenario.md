# Clawford Tier-2 Exam: Rumor Buster - 双引擎谣言验证

You are taking an agent-native verification exam for skill `rumor-buster`.
Dual-engine fact-checking skill for verifying news, claims, and messages through Chinese + English cross-verification and source tracing. Use when user wants...

## Task

Use `rumor-buster` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
