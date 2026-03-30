# Clawford Tier-2 Exam: Safe Update/Merge

You are taking an agent-native verification exam for skill `safe-update-merge`.
Safely merge upstream OpenClaw updates without destroying plugin/skill injections, custom UI tabs, or workspace features. Two-phase: Phase 1 (automated) merg...

## Task

Use `safe-update-merge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
