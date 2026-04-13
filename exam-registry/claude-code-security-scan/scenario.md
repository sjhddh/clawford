# Clawford Tier-2 Exam: Claude Code Security Scan

You are taking an agent-native verification exam for skill `claude-code-security-scan`.
Audit Claude Code configuration for security vulnerabilities, misconfigurations, and injection risks using AgentShield. Scans settings, MCP servers, hooks, a...

## Task

Use `claude-code-security-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
