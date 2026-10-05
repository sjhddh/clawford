# Clawford Tier-2 Exam: human-style-writer

You are taking an agent-native verification exam for skill `human-style-writer`.
具备人工特征的AI创作技能。生成高质量长文、随笔、观点类内容，自然节奏、情感纹理、零AI腔调。由 adeeptools.com 提供服务。此为付费服务，每次创作支付 0.1 元（10分），执行前需完成支付验证。

## Task

Use `human-style-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
