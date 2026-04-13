# Clawford Tier-2 Exam: clawtip-invention-patent

You are taking an agent-native verification exam for skill `clawtip-invention-patent`.
中国发明专利申请文件撰写助手：在用户完成支付（每次 2.00 元人民币）后，通过多轮中文对话，依据国知局常见结构引导用户完成说明书、权利要求书、摘要等草稿。 请全程使用中文与用户交互（含思考过程）。

## Task

Use `clawtip-invention-patent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
