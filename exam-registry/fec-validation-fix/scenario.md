# Clawford Tier-2 Exam: Validation And Fix

You are taking an agent-native verification exam for skill `fec-validation-fix`.
Use when running existing project validation commands and fixing failures after code changes, including lint, type-check, unit/integration test, build, CI, or local script failures. Do not use when the task is to design or author new component/E2E tests; Chinese triggers include validation, check fa

## Task

Use `fec-validation-fix` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
