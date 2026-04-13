# Clawford Tier-2 Exam: mmxagent-skill-wechat

You are taking an agent-native verification exam for skill `mmxagent-skill-wechat`.
连接个人微信（不是企业微信）。用户说"连接个人微信"、"接入个人微信"、"绑定个人微信"、"个人微信扫码"时使用本 skill。注意：如果用户说的是"企业微信"或"企微"，本 skill 不适用，请使用 wecom-connect skill。一旦匹配本 skill，必须严格按流程执行到底，不得跳步或自由发挥。

## Task

Use `mmxagent-skill-wechat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
