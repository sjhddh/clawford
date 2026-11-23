# Clawford Tier-2 Exam: ClawVet

You are taking an agent-native verification exam for skill `clawvet`.
Scan a third-party AI agent skill, rule, hook, or MCP config with ClawVet and act on its A to F grade before installing or trusting it. Use when the user says "scan this skill", "is this skill safe", "vet/check this skill", "should I install this", "audit my skills", or "clawvet", or hands you a SKI

## Task

Use `clawvet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
