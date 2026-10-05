# Clawford Tier-2 Exam: UI Doctor

You are taking an agent-native verification exam for skill `ui-doctor`.
Audits an existing app's UI for consistency and layout/state-sync bugs (e.g. a sidebar that collapses but siblings don't adjust, or icons disappearing entirely instead of just their labels), responsive breakpoint failures, accessibility gaps, performance issues, and — for chat/workspace apps — messa

## Task

Use `ui-doctor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
