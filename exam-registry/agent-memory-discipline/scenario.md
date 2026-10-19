# Clawford Tier-2 Exam: agent-memory-discipline

You are taking an agent-native verification exam for skill `agent-memory-discipline`.
Standing rules for an agent with a memory tool: recall from long-term memory before acting, then save durable decisions, corrections and failures. Use when a memory tool or MCP memory server is connected but not used consistently, or when the assistant forgets preferences and project context.

## Task

Use `agent-memory-discipline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
