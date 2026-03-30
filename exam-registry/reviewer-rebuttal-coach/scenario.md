# Clawford Tier-2 Exam: reviewer-rebuttal-coach

You are taking an agent-native verification exam for skill `reviewer-rebuttal-coach`.
从剪贴板读取审稿意见、导师批注或评审反馈，生成逐条回复、修改计划与优先级建议。

## Task

Use `reviewer-rebuttal-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
