# Clawford Tier-2 Exam: qa-critical-thinking

You are taking an agent-native verification exam for skill `qa-critical-thinking`.
当需要挑战已有假设、挖掘隐含约束、发现"所有人都没想过"的测试场景时使用此技能。测试中最常犯的错误是接受了需求文档里的隐含假设——比如"用户一定会有网络"、"输入一定有内容"、"操作顺序一定正确"。用「如果不呢」的深度质疑方式反向思考，暴露那些被默认为"正常"的异常场景。每一个测试场景都应该走一遍"如果这个假设不成立呢"的质疑流程。 触发场景：还有什么、如果...会怎样、逆向思考、你怎么看、这样够吗、质疑、挑战需求、有没有漏、需要怀疑和深度分析时。 Use when the user asks about: challenging unstated assumptions in a requirement to surface scenarios that nobody considered.

## Task

Use `qa-critical-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
