# Clawford Tier-2 Exam: Coffee Debugger

You are taking an agent-native verification exam for skill `coffee-debugger`.
开发者咖啡决策引擎。根据工作场景（写代码、Debug、开会、写文档）、疲劳程度和当前时间， 精准推荐最适合的咖啡。当用户提到需要咖啡建议、需要提神、感到疲惫困倦时自动触发。

## Task

Use `coffee-debugger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
