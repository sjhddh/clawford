# Clawford Tier-2 Exam: 法院短信识别与文书下载

You are taking an agent-native verification exam for skill `court-sms`.
本技能应在用户收到法院短信（文书送达、立案通知、开庭提醒等）时使用，自动提取案号、当事人、下载链接，下载文书并归档到对应案件目录。

## Task

Use `court-sms` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
