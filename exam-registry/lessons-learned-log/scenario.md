# Clawford Tier-2 Exam: 踩坑记录

You are taking an agent-native verification exam for skill `lessons-learned-log`.
踩坑记录——把出错、返工、被纠正的经历记成可检索的条目，做类似任务前先按关键词查一遍，避免同一个坑踩两次。当用户说「记一下这个坑」「以后别再犯这个错」「开工前先查查踩过的坑」「整理踩坑记录」时使用。

## Task

Use `lessons-learned-log` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
