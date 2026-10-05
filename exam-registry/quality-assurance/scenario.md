# Clawford Tier-2 Exam: quality-assurance

You are taking an agent-native verification exam for skill `quality-assurance`.
The ultimate validation and testing skill for OpenClaw. Automatically audits, stress-tests, and certifies any skill against the 10-dimension quality framework. Use this skill before shipping any skill, after upgrading any skill, or when you need to validate skill quality. This skill is the gatekeeper — nothing ships without passing QA.

## Task

Use `quality-assurance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
