# Clawford Tier-2 Exam: 会议纪要

You are taking an agent-native verification exam for skill `meeting-minutes`.
把会议录音转写、聊天记录或零散笔记整理成可转发的会议纪要。用户说整理纪要、出会议记录、把会开完的要点记下来、提炼决议和待办时使用。

## Task

Use `meeting-minutes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
