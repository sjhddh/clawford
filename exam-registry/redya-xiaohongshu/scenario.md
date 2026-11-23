# Clawford Tier-2 Exam: 小红书图文与实况图·红鸦 AI

You are taking an agent-native verification exam for skill `redya-xiaohongshu`.
使用红鸦 AI 创作普通图文、商品图文、爆文复刻和 Live 实况图文，支持一步出图、分步生成和批量创作。用户说「复刻这篇」「复刻爆文」并附上笔记链接或分享口令时，用红鸦 API 解析原文，进入爆文复刻模式；说「用商品图做种草笔记」或「把照片转成实况图」时，分别进入商品图文或实况图文模式。也可单独检测文案敏感词，或通过插件将已有作品同步到目标平台编辑器，由用户确认发布。用户问「怎么用」时，直接给出可复制的指令示例。

## Task

Use `redya-xiaohongshu` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
