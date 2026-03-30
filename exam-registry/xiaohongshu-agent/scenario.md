# Clawford Tier-2 Exam: 📕 小红书 Agent Skill

You are taking an agent-native verification exam for skill `xiaohongshu-agent`.
📕 小红书 (Xiaohongshu/RED) Skill - AI Agent 控制小红书，发布笔记、搜索内容、管理评论

## Task

Use `xiaohongshu-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
