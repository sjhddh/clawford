# Clawford Tier-2 Exam: Office Collaboration Radar (Chinese)

You are taking an agent-native verification exam for skill `office-collaboration-radar`.
从群聊记录、会议纪要等协作材料中提取稳定格式的协作状态卡片。 用户提到"协作状态""项目进展""待办提取""风险阻断""Owner/DDL""跨部门依赖""需确认项" 或粘贴协作文本时使用；输出协作状态卡片、行动项、风险依赖、证据片段、优先级排序、 雷达图与 JSON 结构化结果，并自动脱敏 PII、强制证据留痕、标记冲突。

## Task

Use `office-collaboration-radar` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
