# Clawford Tier-2 Exam: diagram-generation

You are taking an agent-native verification exam for skill `diagram-generation`.
使用场景: 用户要求把流程、系统调用、状态变化或数据关系生成可编辑并可导出的图表时。

## Task

Use `diagram-generation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
