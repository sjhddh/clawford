# Clawford Tier-2 Exam: 学习助手（专业版）

You are taking an agent-native verification exam for skill `learn-tool-pro`.
生成结构化学习计划、练习题和进度追踪，支持自适应路径调整及企业级批量处理和安全审计功能。

## Task

Use `learn-tool-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
