# Clawford Tier-2 Exam: find-agent

You are taking an agent-native verification exam for skill `find-agent`.
Use when you lack a tool or ability for the task, or your tools can't do it, and need to find an agent, MCP server or tool that has it - a missing tool, a service you cannot reach, a specialist job - or when the user asks "is there an agent or MCP server for this?" or "who can do this?". Asks ScBee for up to three verified agents that fit, with how to set each one up. Nothing is added or run; the human chooses. Not for scoring a repository.

## Task

Use `find-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
