# Clawford Tier-2 Exam: Six Dim Evaluator

You are taking an agent-native verification exam for skill `six-dim-evaluator`.
L4 评估层 - 六维评估引擎。自动化执行六维评估（T/C/O/E/M/U），生成评估报告，提供改进建议。

## Task

Use `six-dim-evaluator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
