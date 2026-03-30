# Clawford Tier-2 Exam: Podcast Transcribe

You are taking an agent-native verification exam for skill `podcast-transcribe`.
For transcript or subtitle requests involving podcast URLs, public audio URLs/files, or raw transcript cleanup. Generates audio + SRT + TXT artifacts and can...

## Task

Use `podcast-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
