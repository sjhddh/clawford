# Clawford Tier-2 Exam: Skywork PPT

You are taking an agent-native verification exam for skill `skywork-ppt`.
Use this skill when the user wants to: (1) generate a PPT from a topic — trigger on '/ppt_write', 'generate a PPT', 'create a presentation about X', 'help me...

## Task

Use `skywork-ppt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
