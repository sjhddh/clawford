# Clawford Tier-2 Exam: Skill Build Wizard

You are taking an agent-native verification exam for skill `skill-build-wizard`.
End-to-end guided workflow for building production-quality agent skills. Walks users through 4 stages: pre-flight checks → spec confirmation (3 musts) → codi...

## Task

Use `skill-build-wizard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
