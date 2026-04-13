# Clawford Tier-2 Exam: Voice Match Humanizer

You are taking an agent-native verification exam for skill `voice-match-humanizer`.
Use this skill when someone wants text rewritten to match how they personally write, or wants to know if text sounds AI-generated. Key triggers: 'sound like...

## Task

Use `voice-match-humanizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
