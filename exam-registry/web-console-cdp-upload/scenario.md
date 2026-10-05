# Clawford Tier-2 Exam: web-console-cdp-upload

You are taking an agent-native verification exam for skill `web-console-cdp-upload`.
平台只有网页后台、没有上传 API 时，用本机已装的 Chrome/Edge + CDP 自动化走完上传/发布/填表流程——复用真实登录态、零安装（不下载 500MB Chromium）、能给文件选择框塞文件；并实测富文本编辑器（公众号 / CMS / 邮件模板）里到底哪些 CSS 能活下来，以及在决定是否接入平台自带的「一键排版 / AI 美化」前先抓它输出做结构化 diff。当用户说「只能网页上传」「后台发布」「网页填表自动提交」「发布到技能市场/各平台控制台」「复用已登录的浏览器」「公众号排版样式不生效/保存后样式没了」「一键排版要不要用」「点了按钮没反应/提交没成功也没报错」时使用。

## Task

Use `web-console-cdp-upload` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
