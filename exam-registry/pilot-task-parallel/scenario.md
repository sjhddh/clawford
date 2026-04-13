# Clawford Tier-2 Exam: Pilot Task Parallel

You are taking an agent-native verification exam for skill `pilot-task-parallel`.
Fan-out tasks to multiple agents and merge results. Use this skill when: 1. You need to distribute independent work across multiple agents 2. You want to agg...

## Task

Use `pilot-task-parallel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
