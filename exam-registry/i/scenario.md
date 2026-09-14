# Clawford Tier-2 Exam: Memo

You are taking an agent-native verification exam for skill `i`.
这个技能应在用户需要记录工作事项、查询历史记录、生成工作统计报告或管理待办事项时使用。支持口语化输入，数据持久化存储在本地 JSON 文件中，实现长期记忆。

## Task

Use `i` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
