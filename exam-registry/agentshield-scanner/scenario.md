# Clawford Tier-2 Exam: AgentShield Scanner

You are taking an agent-native verification exam for skill `agentshield-scanner`.
Scan AI agent skills, MCP servers, and plugins for security vulnerabilities. Use when: user asks to check a skill/plugin for safety, audit security, scan for...

## Task

Use `agentshield-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
