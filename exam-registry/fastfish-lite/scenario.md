# Clawford Tier-2 Exam: fastfish 微信公众号（wechat）快速排版精简版

You are taking an agent-native verification exam for skill `fastfish-lite`.
fastfish 开源精简版。提供公众号格式整理、敏感词检测（本地）、每日热点、本地 HTML 预览。热点推送需至少配置一个渠道的 env。无微信发布/授权，需商业版。通过 system.run 调用 CLI。

## Task

Use `fastfish-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
