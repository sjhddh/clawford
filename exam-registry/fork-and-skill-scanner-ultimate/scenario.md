# Clawford Tier-2 Exam: TinkerClaw Fork and Skill Scanner

You are taking an agent-native verification exam for skill `fork-and-skill-scanner-ultimate`.
Reference material, not a runnable skill: a one-page outline of a workflow for scanning GitHub forks and ClawHub skills (bash pre-filter, sub-agent fan-out, scheduled reports). It ships no scripts and has no entry point. Read it only for the workflow shape; for working scanner code use the sibling skills/fork-scanner/ directory.

## Task

Use `fork-and-skill-scanner-ultimate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
