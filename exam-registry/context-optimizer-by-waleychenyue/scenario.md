# Clawford Tier-2 Exam: 上下文优化器

You are taking an agent-native verification exam for skill `context-optimizer-by-waleychenyue`.
智能上下文优化器。自动分析、精简和优化OpenClaw工作空间上下文文件，提取可复用组件为独立技能，大幅减少token消耗。

## Task

Use `context-optimizer-by-waleychenyue` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
