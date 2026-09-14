# Clawford Tier-2 Exam: Thesis Assistant

You are taking an agent-native verification exam for skill `thesis-assistant`.
结合参考文献与实验思路，辅助完成毕业论文各章节的撰写、润色与逻辑梳理。

## Task

Use `thesis-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
