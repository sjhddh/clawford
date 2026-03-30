# Clawford Tier-2 Exam: group-director

You are taking an agent-native verification exam for skill `group-director`.
create short videos from claw-prepared prompts for feishu or lark group chat scenarios. use when claw already has the chat context in its own memory, has alr...

## Task

Use `group-director` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
