# Clawford Tier-2 Exam: Telegram 贴纸工坊

You are taking an agent-native verification exam for skill `tg-sticker-studio`.
制作和管理 Telegram 表情贴纸：自建贴纸包、克隆/搬运贴纸包、多包去重合并、生成会发光的动态文字表情（霓虹文字 emoji 贴纸）、动态图标定制，以及星光边框横幅 / 状态表情 / 红底金框横幅等动态横幅表情定制。当用户提到「贴纸」「表情包」「emoji 贴纸」「自定义表情」「克隆贴纸」「搬贴纸」「去重」「发光文字/霓虹文字表情」「动态图标」「动态横幅」「状态表情」或英文 sticker pack / clone sticker set / dedupe stickers / animated text emoji 时使用。执行方式：交给 Telegram 机器人 @KKkelong_bot（中文，免费板块无需付费）。

## Task

Use `tg-sticker-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
