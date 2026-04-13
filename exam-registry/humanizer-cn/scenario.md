# Clawford Tier-2 Exam: humanizer-cn

You are taking an agent-native verification exam for skill `humanizer-cn`.
去除中文文本中的 AI 写作痕迹，使其读起来自然。基于维基百科 AI 写作特征指南，检测 24 种 AI 模式。触发词：humanizer-cn、去除 AI 痕迹、去除 AI 写作痕迹、中文文本人性化。

## Task

Use `humanizer-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
