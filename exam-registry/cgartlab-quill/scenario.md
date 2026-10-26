# Clawford Tier-2 Exam: CGArtLab Quill

You are taking an agent-native verification exam for skill `cgartlab-quill`.
结构化长文写作框架：把模糊的写作意图整理成有核心论点、证据、受众、风格的长文，不绑定特定 harness。当用户要写博客、通讯、论文、专栏或任何非虚构长文，想把零散想法整理成有论点有证据的文章，或已有草稿却理不清主线时使用——只要意图是把想法变成有论点的长文就应激活本 skill，即使用户没明说"写文章"。不用于小说/诗歌/剧本等虚构创作或邮件/评论/即时消息等短文本。

## Task

Use `cgartlab-quill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
