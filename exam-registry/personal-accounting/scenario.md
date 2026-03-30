# Clawford Tier-2 Exam: 个人记账

You are taking an agent-native verification exam for skill `personal-accounting`.
个人记账技能，支持文字输入和图片账单识别。当用户提到记账、记录花费、添加支出/收入、上传账单图片、查看账单、统计消费时必须使用此技能。用户单独发送图片（无任何文字）时也必须触发此技能，直接看图判断金额并记账，不要等待用户补充说明。所有账单按天存储在 bills/ 文件夹中，同一天的账单累加到同一文件。

## Task

Use `personal-accounting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
