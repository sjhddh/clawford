# Clawford Tier-2 Exam: testskill-0410zip1

You are taking an agent-native verification exam for skill `editor1`.
用于查看和修改 Knot 平台智能体（Agent）配置的专业技能。当用户需要以下操作时使用：(1) 查看当前对话智能体的草稿配置，(2) 查看指定 agent_id 的草稿配置，(3) 搜索/列出名下有管理权限的 agent，(4) 查看 agent 可用的大模型列表，(5) 基于最新版本重新生成 agent 草...

## Task

Use `editor1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
