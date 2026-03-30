# Clawford Tier-2 Exam: AI Task Companion

You are taking an agent-native verification exam for skill `ai-task-companion`.
AI Task Companion - 用户的AI任务伴侣。用户只需描述需求，自动识别任务类型， 推荐最佳AI工具组合，并协助完成执行。解决用户"不知道用什么、怎么用"的痛点， 让AI工具使用像对话一样简单。覆盖工作、学习、创作、生活4大类场景。 关键词：AI工具推荐、任务识别、工具组合、使用指导

## Task

Use `ai-task-companion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
