# Clawford Tier-2 Exam: Huo15 Xiaohongshu

You are taking an agent-native verification exam for skill `huo15-xiaohongshu`.
小红书笔记抓取 + 数据分析。用浏览器 Cookie 的登录态，带强节流和风控检测，尽量不被封号。支持搜索、笔记详情、用户主页抓取；支持关键词、互动、发文时段、爆款特征等离线分析。触发词：小红书、xhs、笔记分析、小红书选题、爆款研究。

## Task

Use `huo15-xiaohongshu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
