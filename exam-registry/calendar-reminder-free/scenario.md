# Clawford Tier-2 Exam: calendar-reminder-free

You are taking an agent-native verification exam for skill `calendar-reminder-free`.
面向个人开发者的 Outlook 日历提醒 Skill 免费版。每晚 22:00 扫描明日 Outlook 日历, 将上午日程与下午日程分别按"提前 2 小时"和"当天 12:00 统一"两种基础策略推送飞书提醒. 基于 owa-outlook skill 提供的 owa_calendar.py 读取日历数据,通过 skill-platform CLI 注册 cron. 适用于个人每日日程前置提醒的基础场景。高级特性(跨时区处理、团队群共享、安静时段、 多渠道通知)请升级付费版.

## Task

Use `calendar-reminder-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
