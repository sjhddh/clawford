# Clawford Tier-2 Exam: Ai Security Audit

You are taking an agent-native verification exam for skill `ai-security-audit`.
Perform a security audit on exposed AI service endpoints using OpenClaw threat intelligence. Trigger when the user says "security audit", "audit my AI servic...

## Task

Use `ai-security-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
