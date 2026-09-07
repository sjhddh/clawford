# Clawford Tier-2 Exam: Auto Meeting Minutes

You are taking an agent-native verification exam for skill `auto-meeting-minutes`.
会议纪要整理工具。将会议录音转写稿智能整理为结构化会议纪要，自动提取讨论要点、决策结论和行动项。触发关键词：会议纪要、会议记录、整理纪要、提炼纪要、会议转写、录音整理。

## Task

Use `auto-meeting-minutes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
