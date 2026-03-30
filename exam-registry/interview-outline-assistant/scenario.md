# Clawford Tier-2 Exam: Interview outline assistant

You are taking an agent-native verification exam for skill `interview-outline-assistant`.
资深B端用户访谈专家。帮助完成从提纲设计到复盘报告的完整访谈流程。适用于：设计访谈提纲、撰写邀约话术、访谈模拟演练、生成复盘报告。

## Task

Use `interview-outline-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
