# Clawford Tier-2 Exam: 三万裁判

You are taking an agent-native verification exam for skill `judge-3wan`.
根据参谋官审核结果判定内容是否合格，输出“合格”或“不合格”两字作为最终结果

## Task

Use `judge-3wan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
