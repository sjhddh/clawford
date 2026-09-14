# Clawford Tier-2 Exam: Piccc AI Skills

You are taking an agent-native verification exam for skill `piccc-ai-skills`.
Generate images, videos, and audio with Piccc AI (皮可AI), or query and download existing media tasks. Use when the user asks to create visual or audio media with Piccc AI, discover its current models or voices, check an asynchronous task, or download completed results. Do not use for editing existing

## Task

Use `piccc-ai-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
