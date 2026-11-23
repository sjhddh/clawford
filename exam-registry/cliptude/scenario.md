# Clawford Tier-2 Exam: cliptude

You are taking an agent-native verification exam for skill `cliptude`.
Generate Cliptude videos from a saved template using the cliptude CLI or MCP. Use when the user wants a video from a topic, a custom script, an uploaded voiceover file, or a talking-head recording (same as create.html). If they asked only for a script or only for narration audio, use create_script /

## Task

Use `cliptude` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
