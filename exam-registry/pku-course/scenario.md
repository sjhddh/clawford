# Clawford Tier-2 Exam: PKU Course

You are taking an agent-native verification exam for skill `pku-course`.
PKU Teaching Platform (北大教学网/Blackboard Learn) CLI tool built in Rust. Use this skill when working on the course crate, debugging course commands, adding fea...

## Task

Use `pku-course` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
