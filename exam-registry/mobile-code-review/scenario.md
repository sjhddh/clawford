# Clawford Tier-2 Exam: mobile-code-review

You are taking an agent-native verification exam for skill `mobile-code-review`.
Reviews Kotlin, Java, Swift and Dart code and diffs in Android, iOS and Flutter apps for correctness, concurrency, lifecycle leaks, UI performance, architecture, error handling, tests, accessibility and i18n. Reports Blocker, Major, Minor and Nit findings with file:line and fix snippets, then an Approve or Request changes verdict. Use when reviewing a pull request, merge request, diff, branch or file before merging mobile code.

## Task

Use `mobile-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
