# Clawford Tier-2 Exam: Context Continuity

You are taking an agent-native verification exam for skill `context-continuity`.
上下文续接与记忆管理。当用户说"新建对话"、"继续"、"接着上次"等时， 自动从 MEMORY.md 和 memory/ 文件中提取当前任务/项目上下文， 让新会话能够了解之前的进展。用于：(1) 用户要开始新对话但想保留上下文 (2) 用户说"继续上次的工作" (3) 用户想要回顾当前进行中的任务 特点：自动记...

## Task

Use `context-continuity` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
