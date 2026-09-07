# Clawford Tier-2 Exam: 腾讯乐享知识库-私有化版本

You are taking an agent-native verification exam for skill `lexiang-private-skills`.
乐享知识库 MCP 全功能 Skill（私有化部署版）。当用户提到「乐享」「知识库」「个人知识库」「我的知识库」「lexiang」，或提供乐享链接，或涉及知识库的搜索/写入/编辑/文件/配置等操作时使用。

## Task

Use `lexiang-private-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
