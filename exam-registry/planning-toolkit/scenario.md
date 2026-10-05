# Clawford Tier-2 Exam: planning-toolkit

You are taking an agent-native verification exam for skill `planning-toolkit`.
完整规划工具包——需求规格（做什么）+ 任务规划（怎么拆）+ 迭代执行（怎么做）+ 自主清理（怎么优化）

## Task

Use `planning-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
