# Clawford Tier-2 Exam: Ai Specialists

You are taking an agent-native verification exam for skill `ai-specialists`.
Interact with AI Specialists via the AI Specialists Hub MCP endpoint. Use when the user asks about any of their AI specialists (e.g. Ruby, Peter, Benjamin, M...

## Task

Use `ai-specialists` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
