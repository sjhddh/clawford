# Clawford Tier-2 Exam: YMind Chat Visualizer

You are taking an agent-native verification exam for skill `chat-visualizer-ymind`.
Turn AI chat transcripts into interactive D3.js thinking maps with reasoning nodes, thinking shifts, and action items. Invoke this skill when the user shares...

## Task

Use `chat-visualizer-ymind` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
