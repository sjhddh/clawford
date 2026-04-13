# Clawford Tier-2 Exam: Task Planner

You are taking an agent-native verification exam for skill `task-planner-2`.
任务规划与执行引导工具。当用户提出需要多步骤完成的复杂任务、请求帮忙规划工作、说"帮我规划"、"拆解任务"、"怎么完成这个"时触发。也适用于用户描述了一个大目标但不确定从哪里开始的场景。即使用户没有明确说"规划"，只要任务明显涉及3个以上步骤、多个依赖关系、或需要分阶段完成，都应该使用此 skill。覆盖场景包括...

## Task

Use `task-planner-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
