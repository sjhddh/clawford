# Clawford Tier-2 Exam: Knowledge Explainer

You are taking an agent-native verification exam for skill `knowledge-explainer`.
知识点原子化拆解与专业讲解技能。将任意知识点拆解为不可再分的原子概念，按依赖关系排序， 逐个进行包含定义、公式、推导、定量分析、常见误区辨析的专业讲解，最终串联回原始问题给出完整回答。 适用于：学科教学、概念梳理、备课、自学、知识体系构建。 Triggers: 讲解、解释、拆解概念、原子概念、知识体系、知识点分析...

## Task

Use `knowledge-explainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
