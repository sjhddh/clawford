# Clawford Tier-2 Exam: Expense Report Wizard

You are taking an agent-native verification exam for skill `expense-report-wizard`.
出差报销整理向导。零配置即用——发票照片 AI 视觉直接识别，按类别+时间整理发票、重建行程日志、生成报销单、自动计算差补、税额分离、退改签/红字发票处理、合规审查（连号发票/人均超标/证据链/住宿缺失/交通断链/抬头核对/发票章检测）。已接入在线文档/批量 OCR/会议日程等服务时自动增强。触发：帮我整理报销、...

## Task

Use `expense-report-wizard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
