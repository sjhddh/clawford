# Clawford Tier-2 Exam: Scrask

You are taking an agent-native verification exam for skill `scrask-bot`.
When the user sends a screenshot via Telegram, parse it using Gemini (fast, default) with automatic Claude fallback when confidence is low. Saves results to...

## Task

Use `scrask-bot` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
