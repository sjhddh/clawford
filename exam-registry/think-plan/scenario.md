# Clawford Tier-2 Exam: Think-Plan

You are taking an agent-native verification exam for skill `think-plan`.
深度思考与规划 Skill。用于复杂任务的需求挖掘、方案设计和执行规划。 触发场景： 1. 用户说"帮我规划一下..."、"我想做一个..."、"分析一下这个方案" 2. 用户明确说"使用 think-plan"或"用思考规划 Skill" 3. 用户提出的任务需求不清晰、需要梳理 4. 用户需要多个可选方案对比...

## Task

Use `think-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
