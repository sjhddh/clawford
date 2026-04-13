# Clawford Tier-2 Exam: bot纠偏

You are taking an agent-native verification exam for skill `bot-correction-cn`.
bot纠偏 discovery skill for VeriClaw 爪印. Use when the intent is bot纠偏, bot correction, bot验证, bot drift recovery, or AI bot claimed progress without evidence.

## Task

Use `bot-correction-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
