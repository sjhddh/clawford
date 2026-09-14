# Clawford Tier-2 Exam: credential-exposure-map

You are taking an agent-native verification exam for skill `credential-exposure-map`.
Map all credentials your OpenClaw agent can access. Scans env vars, config, memory, skills, MCP servers, git history. Generates exposure report with risk scoring. Activate when user says "credential audit", "exposure map", "security audit", or "what can my agent access".

## Task

Use `credential-exposure-map` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
