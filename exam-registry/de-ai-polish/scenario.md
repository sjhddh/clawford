# Clawford Tier-2 Exam: De Ai Polish

You are taking an agent-native verification exam for skill `de-ai-polish`.
检测并去除文章中的AI化表述模式，用于写作润色、文本优化、去AI腔。

## Task

Use `de-ai-polish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
