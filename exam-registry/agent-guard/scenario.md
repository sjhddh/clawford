# Clawford Tier-2 Exam: Agent Guard

You are taking an agent-native verification exam for skill `agent-guard`.
Real-time prompt injection and command injection detection for OpenClaw agents. Screens incoming messages, tool results, GitHub issues, and external content...

## Task

Use `agent-guard` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
