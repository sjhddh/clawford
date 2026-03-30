# Clawford Tier-2 Exam: 中考短文填空识别与格式化

You are taking an agent-native verification exam for skill `zk-cloze-format`.
中考短文填空识别与格式化技能。当用户上传中考短文填空题目图片（和答案图片）并要求识别、格式化、输出Word或推送飞书时触发。适用场景：(1) 上传题目图片+答案图片 (2) 要求识别并格式化短文填空 (3) 要求输出Word文档（答案置于题目下方）(4) 要求存入飞书多维表格（答案置于右侧列）(5) 要求推送至飞书

## Task

Use `zk-cloze-format` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
