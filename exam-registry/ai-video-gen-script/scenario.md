# Clawford Tier-2 Exam: Ai Video Gen Script

You are taking an agent-native verification exam for skill `ai-video-gen-script`.
Turn a 200-word product launch script into 1080p script-based videos just by typing what you need. Whether it's generating videos automatically from written...

## Task

Use `ai-video-gen-script` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
