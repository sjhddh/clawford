# Clawford Tier-2 Exam: Prototype Generator

You are taking an agent-native verification exam for skill `prototype-generator`.
基于产品 PRD 文档、竞品截图和开放平台接口文档，自助完成产品原型（Prototype）的输出、验证和定稿。 **使用场景**（触发条件）： 1. 用户需要"基于PRD输出原型"、"生成产品原型"、"根据需求文档画原型" 2. 用户需要"验证原型完整性"、"检查原型是否覆盖所有需求" 3. 用户提供了 PRD...

## Task

Use `prototype-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
