# Clawford Tier-2 Exam: 医生工作台助手 (Agentic AI 科研平台)

You are taking an agent-native verification exam for skill `agentic-doctor-assistant`.
医生工作台助手。整理患者基本信息、关键时间线、检验趋势、待办事项并生成随访任务草稿。当用户以医生身份查询患者情况或需要随访建议时触发。

## Task

Use `agentic-doctor-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
