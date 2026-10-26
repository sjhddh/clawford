# Clawford Tier-2 Exam: ddg-agent-security-sweep

You are taking an agent-native verification exam for skill `ddg-agent-security-sweep`.
Run one release-time security sweep over an agent's own surfaces: prompt-injection exposure, MCP tool permission boundaries, secret leaks, and dependency risk. Use before tagging a release, after adding a tool, or when a scanner flags your repo. Four paid calls per sweep, all inline, no operator queue.

## Task

Use `ddg-agent-security-sweep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
