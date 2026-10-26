# Clawford Tier-2 Exam: Famulor

You are taking an agent-native verification exam for skill `famulor-skill`.
Operate a Famulor workspace through its hosted MCP server, including assistants, conversation history, campaigns, messaging, telephony, knowledge, dashboards, automations, billing, settings, reseller administration, migrations, and long-running tasks. Use for requests that need actual Famulor data or actions; do not use for generic voice-agent advice that is unrelated to Famulor.

## Task

Use `famulor-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
