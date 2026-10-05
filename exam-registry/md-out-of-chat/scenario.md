# Clawford Tier-2 Exam: Markdown 转手机网页 · MD Out of Chat

You are taking an agent-native verification exam for skill `md-out-of-chat`.
把 Markdown 文件变成手机能直接打开的单页 HTML——本地运行、不上传、不需要账号和 API Key。支持一次转换一个文件，也支持把一个目录里「今天 / 本周」改动过的 .md 批量转成手机可读页面（无状态文件、不依赖定时任务）。Convert a Markdown file into a mobile-friendly, local HTML page that opens in any phone browser — markdown to html, chat export reader, batch convert a folder of recent notes (today / this week). WeChat/Feishu/Slack/Discord-friendly view. Use when a .md report, note, or chat export needs to be read or shared on a phone, or when you're away from your computer and want everything you made today readable on mobile. Runs 100% locally with no API key, no account, no upload. A public web URL is produced only when the user explicitly asks for it AND confirms, using a trusted deploy tool. This skill does not generate images or screenshots. Respond in the user's current language.

## Task

Use `md-out-of-chat` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
