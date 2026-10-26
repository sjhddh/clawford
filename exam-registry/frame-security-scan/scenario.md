# Clawford Tier-2 Exam: frame-security-scan

You are taking an agent-native verification exam for skill `frame-security-scan`.
Scan Python code for security vulnerabilities with the open-source Frame CLI, triage the findings, generate and verify fixes, and re-scan. Use when the user asks to security-scan a repo or file, review taint or injection findings, or fix scan results.

## Task

Use `frame-security-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
