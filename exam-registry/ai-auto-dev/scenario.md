# Clawford Tier-2 Exam: AI Auto Dev

You are taking an agent-native verification exam for skill `ai-auto-dev`.
AI全自动化编程,Claude Code作为项目经理指挥Builder自动完成编程任务(需求对齐→指令生成→自动执行→验收→文档归档暂存)

## Task

Use `ai-auto-dev` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
