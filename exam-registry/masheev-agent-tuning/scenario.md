# Clawford Tier-2 Exam: masheev-agent-tuning

You are taking an agent-native verification exam for skill `masheev-agent-tuning`.
Review and improve a Masheev AI agent from an AI assistant connected to the Masheev MCP server. Use when asked why the AI agent gave a wrong answer, to "improve my bot", tighten its instructions, add knowledge it is missing, pause or resume it, or check whether its channels are set up. Reads recent conversations and escalations as evidence, proposes concrete instruction or knowledge changes, and applies them only after the owner approves.

## Task

Use `masheev-agent-tuning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
