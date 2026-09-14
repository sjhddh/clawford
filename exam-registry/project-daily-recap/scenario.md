# Clawford Tier-2 Exam: Project Daily Recap

You are taking an agent-native verification exam for skill `project-daily-recap`.
项目进度定时复盘提醒 — 每晚8点自动推送复盘消息到微信，零LLM依赖，cron触发，适合工控/自动化/制造项目用

## Task

Use `project-daily-recap` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
