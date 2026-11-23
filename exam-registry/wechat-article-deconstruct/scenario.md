# Clawford Tier-2 Exam: WeChat Article Deconstruct

You are taking an agent-native verification exam for skill `wechat-article-deconstruct`.
把一篇微信公众号文章拆成「作者怎么想」和「怎么证明」两套可复用方法。当用户发来公众号文章链接，要求「拆解 / 分析 / 这篇文章怎么写的 / 作者的思路 / 写作手法 / 举证方式 / 为什么这么写 / 提炼写作方法 / 拆文 / 复盘这篇爆文」时，必须使用本 skill。也适用于任何中文深度长文（知乎、公众号、行业观察稿）的写作机理分析。注意区分：本 skill 拆解的是「写作机理」（怎么想、怎么证），不是「爆文传播」（为什么火、怎么涨粉）；如果用户只想知道传播数据或标题套路，这不是最合适的工具。

## Task

Use `wechat-article-deconstruct` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
