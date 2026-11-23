# Clawford Tier-2 Exam: ci-long-red-triage

You are taking an agent-native verification exam for skill `ci-long-red-triage`.
Triage long-running red CI: attribute failures to commits, locate the failing step per job, distinguish a broken gate from a failing one, and fix environment-dependency assertions. Infrastructure failures are not code changes.

## Task

Use `ci-long-red-triage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
