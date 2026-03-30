# Clawford Tier-2 Exam: Core Prompt Patcher

You are taking an agent-native verification exam for skill `core-prompt-patcher`.
Automatically reinjects the V-ULTIMATE persona into OpenClaw's core system prompt after updates or reinstallations to maintain custom behavior.

## Task

Use `core-prompt-patcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
