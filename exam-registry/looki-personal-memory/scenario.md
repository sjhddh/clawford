# Clawford Tier-2 Exam: looki-personal-memory

You are taking an agent-native verification exam for skill `looki-personal-memory`.
Retrieve the user's personal memories saved by Looki, including moments of daily activities, daily and weekly life summaries, chat history and summaries, health reports, and AI-generated journals such as illustrated diaries, comics, and vlogs, through MCP (if available) or the Looki CLI.

## Task

Use `looki-personal-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
