# Clawford Tier-2 Exam: MochiLab Skills Assistant

You are taking an agent-native verification exam for skill `mochilab-skills`.
Find, inspect, install and update Skills from the MochiLab catalogue. Use when someone asks what MochiLab Skills can do, wants a Skill for a task, or asks to install or update a MochiLab Skill. Supports Chinese and English.

## Task

Use `mochilab-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
