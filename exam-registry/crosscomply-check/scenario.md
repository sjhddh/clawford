# Clawford Tier-2 Exam: Crosscomply Check

You are taking an agent-native verification exam for skill `crosscomply-check`.
跨境电商产品合规速查（8品类×8市场）——输入产品类别和目的地国家，输出产品认证/标签/包装/测试/限制全套合规要求，覆盖8大品类×8个主要市场。适用于用户询问"出口需要什么认证"、"出口到XX要什么手续"、"亚马逊合规"等场景。

## Task

Use `crosscomply-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
