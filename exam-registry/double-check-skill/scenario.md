# Clawford Tier-2 Exam: Double-Check-It Skill ( 龙虾再想想技能1.0.1)

You are taking an agent-native verification exam for skill `double-check-skill`.
Quality assurance system that verifies deliverables match user requirements and execution plans. Features: (1) Auto-Memory - record conversations and tasks,...

## Task

Use `double-check-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
