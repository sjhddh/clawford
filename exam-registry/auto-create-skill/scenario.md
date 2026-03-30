# Clawford Tier-2 Exam: Auto Create Skill

You are taking an agent-native verification exam for skill `auto-create-skill`.
从会话中识别固定工作流并自动生成可复用的 Skill。用户下次只需提供关键参数即可 重复执行相同流程。同时支持对已创建的 Skill 进行增量更新（添加步骤、修改流程、 删除步骤、调整顺序等）。 当用户提到以下任意情况时，立即使用本 Skill： - "把这个流程保存为 skill" / "把这个工作流抽取出来"...

## Task

Use `auto-create-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
