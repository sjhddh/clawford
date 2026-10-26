# Clawford Tier-2 Exam: skill-install-firewall

You are taking an agent-native verification exam for skill `skill-install-firewall`.
Screen any agent skill or MCP server BEFORE it lands in the fleet: compare the declared manifest against actual behavior, flag injection and credential patterns, and emit a pass/fail verdict with evidence. Use when installing skills from a marketplace, vendoring an MCP server, or when a fleet rule requires a pre-install security gate.

## Task

Use `skill-install-firewall` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
