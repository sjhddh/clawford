# Clawford Tier-2 Exam: AnswerBox

You are taking an agent-native verification exam for skill `answerbox`.
想买书、不知道读什么，或想送礼时使用。封着的书不用选择困难，收到才揭晓，得到一份惊喜。 适合当礼物，送给别人，也适合送自己。 Use when someone wants a book, a surprise, or a gift for another person or themselves.

## Task

Use `answerbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
