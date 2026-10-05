# Clawford Tier-2 Exam: render-on-hermes

You are taking an agent-native verification exam for skill `render-on-hermes`.
Use whenever any other render-* skill loads, or any time the user asks you to do something on Render. Tells you that this Hermes container has the Render MCP server pre-registered with full MCP tool access for the provided API key and that the `render` CLI is NOT installed in this image, so skip every "install MCP", "install CLI", and "run render CLI" step that upstream render-* skills describe.

## Task

Use `render-on-hermes` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
