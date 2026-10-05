# Clawford Tier-2 Exam: Atomic Knowledge Explainer

You are taking an agent-native verification exam for skill `atomic-knowledge-explainer`.
原子知识讲解技能，将复杂知识分拆成原子概念，原子概念生成完整讲解，默认只展示概念关联结构但用户可以要求展示完整讲解。6域30种任务。触发词：原子概念、知识讲解、概念分拆、概念关联、知识结构、meta-skill-system。

## Task

Use `atomic-knowledge-explainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
