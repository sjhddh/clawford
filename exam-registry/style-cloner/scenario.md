# Clawford Tier-2 Exam: 文章风格克隆助手

You are taking an agent-native verification exam for skill `style-cloner`.
提供1-5篇参考文章 + 原始素材，AI 分析参考文章的风格特征， 将素材改写成同风格的成品文章，输出3个版本供选择，支持强度调节和迭代优化。

## Task

Use `style-cloner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
