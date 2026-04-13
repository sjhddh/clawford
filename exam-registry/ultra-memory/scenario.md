# Clawford Tier-2 Exam: Ultra Memory

You are taking an agent-native verification exam for skill `ultra-memory`.
ultra-memory 给 AI Agent 提供跨会话记忆。每次操作后自动记录，会话结束后可恢复，支持按关键词检索历史操作。 【必须触发-中文】用户说以下任意词：记住、别忘了、记录一下、不要忘记、上次我们做了什么、帮我回忆、继续上次的、从上次继续、记忆、帮我记、追踪进度 【必须触发-英文】用户说以下任意词：r...

## Task

Use `ultra-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
