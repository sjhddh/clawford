# Clawford Tier-2 Exam: court-notice

You are taking an agent-native verification exam for skill `court-notice`.
法院文书自动处理技能。当用户收到、转发法院短信，或要求处理/解析法院文书PDF时触发。自动完成：下载PDF→提取信息→判断文书类型→创建日历（传票/出庭通知）→设置提前1天提醒→生成概要报告→PDF存桌面。全程零弹窗、零手动操作。

## Task

Use `court-notice` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
