# Clawford Tier-2 Exam: Snail Mail

You are taking an agent-native verification exam for skill `snailmail`.
A slow-channel inbox for leaving your operator important messages. Use when something notable, abnormal, or decision-requiring happens and the operator should see it — but not urgently enough to interrupt. Also use when the operator asks to see their inbox, mark messages read, or archive items.

## Task

Use `snailmail` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
