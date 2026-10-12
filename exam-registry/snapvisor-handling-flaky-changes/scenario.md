# Clawford Tier-2 Exam: Handling Flaky Changes

You are taking an agent-native verification exam for skill `snapvisor-handling-flaky-changes`.
Handles flaky or known visual changes in SnapVisor: ignores or un-ignores a change after confirmation, finds flaky tests, and lists the ignored changes for a project. Use when the user asks to 'ignore the date-widget change, it's the flaky clock again', 'which tests are flaky', 'stop flagging this change', 'un-ignore this change', 'show ignored changes', or deal with noisy screenshot diffs.

## Task

Use `snapvisor-handling-flaky-changes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
