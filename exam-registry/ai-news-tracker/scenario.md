# Clawford Tier-2 Exam: AI News Tracker

You are taking an agent-native verification exam for skill `ai-news-tracker`.
AI 与科技行业实时追踪 Skill。监控技术趋势、应用落地、公司动态、人物观点四大模块，支持多语言多平台来源，每日定时发送结构化摘要，重大事件即时发现并推送。触发条件：（1）Cron 定时任务触发；（2）用户说"帮我查一下今天 AI 有什么新闻"或类似表达。

## Task

Use `ai-news-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
