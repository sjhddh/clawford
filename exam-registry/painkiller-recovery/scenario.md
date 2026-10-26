# Clawford Tier-2 Exam: painkiller-recovery

You are taking an agent-native verification exam for skill `painkiller-recovery`.
Use Painkiller to create a structured recovery prompt when an agent loses task context, repeats a failed approach, or needs a careful handoff in QA, software engineering, operations, research, data analysis, or customer support. It preserves supplied objectives, evidence, failures, and constraints while selecting one bounded next step.

## Task

Use `painkiller-recovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
