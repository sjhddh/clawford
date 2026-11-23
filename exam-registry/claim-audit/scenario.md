# Clawford Tier-2 Exam: claim-audit

You are taking an agent-native verification exam for skill `claim-audit`.
Use when a skill package, README or report states numbers such as "9/9 PASS", "N files", "100/100" or file paths, and you need to know whether those numbers were actually produced by running the code. Re-runs the package's own test runner, counts real files, re-scores with the reviewer, and checks declared paths exist. Read-only, never edits the document.

## Task

Use `claim-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
