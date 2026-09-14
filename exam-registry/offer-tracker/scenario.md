# Clawford Tier-2 Exam: offer-tracker

You are taking an agent-native verification exam for skill `offer-tracker`.
中文秋招/实习求职进度管理技能。将用户以自由格式（"日期 公司-岗位 状态"批量）发送的目标公司、投递岗位、应聘状态、DDL 等信息，识别并录入到一个浏览器可打开的 HTML 进度表，并维护一份可回灌的 JSON 备份。当用户用 /offer、/offer-tracker 或提交成批的"公司-岗位-状态"求职记录时使用。

## Task

Use `offer-tracker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
