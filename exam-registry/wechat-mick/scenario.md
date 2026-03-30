# Clawford Tier-2 Exam: wechat-mick

You are taking an agent-native verification exam for skill `wechat-mick`.
总结微信公众号文章内容。当用户提供微信公众号文章链接（mp.weixin.qq.com）并要求总结、概括、摘要、快速了解文章内容时使用此 skill。也适用于用户说"帮我看看这篇文章讲什么"、"这篇公众号文章说了啥"、"总结一下这个链接"等请求。只要看到 mp.weixin.qq.com 的链接并且用户想了解内容...

## Task

Use `wechat-mick` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
