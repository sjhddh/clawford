# Clawford Tier-2 Exam: 去除文本中

You are taking an agent-native verification exam for skill `humanizer`.
去除文本中AI生成痕迹，使文字更自然、符合人类写作风格，支持多格式处理与批量任务管理。

## Task

Use `humanizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
