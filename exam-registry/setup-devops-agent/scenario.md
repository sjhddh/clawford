# Clawford Tier-2 Exam: setup-devops-agent

You are taking an agent-native verification exam for skill `setup-devops-agent`.
Setup and diagnostics for the AWS DevOps Agent MCP connection. Triggers when aws-devops-agent is missing from .mcp.json, when the connection is broken, or when the user says "set up devops agent" / "configure agent". Does NOT trigger if the MCP is already connected and working.

## Task

Use `setup-devops-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
