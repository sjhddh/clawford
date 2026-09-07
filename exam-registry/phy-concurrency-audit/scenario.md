# Clawford Tier-2 Exam: Phy Concurrency Audit

You are taking an agent-native verification exam for skill `phy-concurrency-audit`.
Static concurrency and race-condition auditor for Go, Java, Python, Node.js/TypeScript. Detects shared-state mutations without locks (Go map races, Java non-...

## Task

Use `phy-concurrency-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
