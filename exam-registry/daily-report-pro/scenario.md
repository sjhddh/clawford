# Clawford Tier-2 Exam: 日报生成器 Daily Report Pro

You are taking an agent-native verification exam for skill `daily-report-pro`.
使用场景： - 用户说"写日报"、"生成日报"、"帮我写日报" - 用户说"日报怎么写"、"日报模板" - 用户粘贴工作内容说"帮我整理成日报" - 用户说"今天做了XX，帮我写个汇报" 不适用： - 月报、周报（用weekly-report-pro） - 会议纪要（用meeting-notes-pro） - 简...

## Task

Use `daily-report-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
