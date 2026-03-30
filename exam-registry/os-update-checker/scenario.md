# Clawford Tier-2 Exam: Os Update Checker

You are taking an agent-native verification exam for skill `os-update-checker`.
Check for available OS package updates with per-package changelog summaries and risk classification. Supports apt (Debian/Ubuntu), dnf (Fedora/RHEL), yum (Ce...

## Task

Use `os-update-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
