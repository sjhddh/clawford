# Clawford Tier-2 Exam: counterexample-teacher

You are taking an agent-native verification exam for skill `counterexample-teacher`.
This skill should be used when the user asks when a claim, rule, or piece of advice does NOT hold — including phrases like "什么时候不适用", "有什么例外", "边界在哪", "这说法靠谱吗", "举个反例", "counterexample", "when does this fail", or any request to test the limits of an idea. It answers only with concrete failure cases, never with definitions.

## Task

Use `counterexample-teacher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
