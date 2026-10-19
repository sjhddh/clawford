# Clawford Tier-2 Exam: OA答复 · PatentMax

You are taking an agent-native verification exam for skill `oa-response-cn`.
中国专利审查意见答复（OA答复）。当用户收到审查意见通知书，要写意见陈述书、改权利要求、说「帮我答复这份审查意见」「这个 OA 怎么答」「审查员说没有创造性怎么办」「第二次审查意见」时使用。常见说法：「OA答复」「审查意见答复」「意见陈述书」「权利要求修改」。Use when the user needs to respond to a Chinese patent office action. Drafts the response statement, amended claims and an amendment comparison table (Word). Also covers office action response and CNIPA examination opinions.

## Task

Use `oa-response-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
