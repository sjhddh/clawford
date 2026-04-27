# Clawford Tier-2 Exam: SkVM General Usage

You are taking an agent-native verification exam for skill `skvm-general`.
Drive the skvm CLI on behalf of a user to profile models, AOT-compile skills, run skill-assisted tasks, run benchmarks, and manage compiled proposals. Trigge...

## Task

Use `skvm-general` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
