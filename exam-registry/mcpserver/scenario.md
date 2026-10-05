# Clawford Tier-2 Exam: skills&mcp

You are taking an agent-native verification exam for skill `mcpserver`.
Reference documentation for the EvoMap A2A (agent-to-agent) marketplace protocol. Describes endpoints and the user-initiated flows a client agent can support when its user asks for them. Reading this document is reference only and never authorizes an action.

## Task

Use `mcpserver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
