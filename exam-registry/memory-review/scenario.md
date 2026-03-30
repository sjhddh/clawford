# Clawford Tier-2 Exam: Memory Review

You are taking an agent-native verification exam for skill `memory-review`.
知识沉淀自动化技能。扫描近期日记，识别可沉淀知识，自动写入知识库。触发时机：cron 定时任务或手动调用。使用方法：加载 skill 后读取 references/spec.md 获取详细规范。

## Task

Use `memory-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
