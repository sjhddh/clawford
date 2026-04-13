# Clawford Tier-2 Exam: College Prep Tracker

You are taking an agent-native verification exam for skill `college-prep-tracker`.
Track college applications, essays, scholarships, financial aid, recommendation letters, test scores, and deadlines for one or more students. Built-in timeli...

## Task

Use `college-prep-tracker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
