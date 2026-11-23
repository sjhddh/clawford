# Clawford Tier-2 Exam: qa-req-deconstruction

You are taking an agent-native verification exam for skill `qa-req-deconstruction`.
将模糊的需求描述系统化拆分为输入、操作、状态、输出、规则五个可测试维度，同时挖掘显性需求之外的那些"没写出来但必须满足"的隐性需求和衍生需求。当用户的需求描述只有一两句话、或者看起来功能很简单但你可能遗漏了什么的时候，一定要用此技能做深度解构。适用于任何测试任务的第二步骤——无论需求文档有多详细，解构之后总能发现盲区。每条需求带唯一 ID（REQ-{模块缩写}-{序号}）。 触发场景：分析这个需求、需求解构、挖掘隐含需求、需求挖掘、需求分析、拆解需求、业务规则提取、需求模糊需要深挖时。 Use when the user asks about: deconstructing a vague requirement into testable dimensions — inputs, operations, states, outputs, and rules — plus mining implied and derived requirements.

## Task

Use `qa-req-deconstruction` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
