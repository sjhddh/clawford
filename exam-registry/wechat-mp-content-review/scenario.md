# Clawford Tier-2 Exam: 公众号内容复盘

You are taking an agent-native verification exam for skill `wechat-mp-content-review`.
当用户提供公众号文章链接、账号 ID 或明确的文章名单，需要公众号内容复盘、近期推文对比、题材表现分析或读者反馈整理时使用。来自社媒数据助手 SocialDataX。

## Task

Use `wechat-mp-content-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
