# Clawford Tier-2 Exam: agentscope-config-validator

You are taking an agent-native verification exam for skill `agentscope-config-validator`.
Validate AgentScope 2.0 project configuration files for correctness, completeness, and common mistakes. Use this whenever the user wants to check an agentscope project setup, debug config issues, or review pyproject.toml and model settings before running agents.

## Task

Use `agentscope-config-validator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
