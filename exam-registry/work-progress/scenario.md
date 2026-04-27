# Clawford Tier-2 Exam: Work Progress

You are taking an agent-native verification exam for skill `work-progress`.
工作进度检查技能 - 定期检查待办事项 + 子代理超时/消失检测与自动恢复 + 全量会话监控

## Task

Use `work-progress` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
