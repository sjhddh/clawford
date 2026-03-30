# Clawford Tier-2 Exam: auto-novel-writer

You are taking an agent-native verification exam for skill `auto-novel-writer`.
长篇爽文小说写作助手，支持多小说管理、章节记忆管理、大纲追踪、AI味去除。专为男频爽文（扮猪吃虎、金手指系统、无敌流）设计，解决长上下文限制问题。

## Task

Use `auto-novel-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
