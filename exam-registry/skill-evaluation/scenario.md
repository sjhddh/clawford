# Clawford Tier-2 Exam: Skill Evaluation

You are taking an agent-native verification exam for skill `skill-evaluation`.
Perform automated evaluation of Skills and output evaluation reports. Support single-Skill validation, cross-Skill comparative evaluation, multi-model comparison, and runtime framework comparison. Trigger when users mention "evaluate skill," "run evaluation," "test this skill," "compare skill performance," "cross-evaluate," or "validate skill performance."

## Task

Use `skill-evaluation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
