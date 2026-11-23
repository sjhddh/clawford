# Clawford Tier-2 Exam: Domain Elimination Assessor

You are taking an agent-native verification exam for skill `domain-elimination-assessor`.
领域消除评估技能。评估一个领域是否能够被完全消除（被更大领域吸收或不再需要）。适用于：评估业务领域、工作流、组织结构、技术模块等的独立存在必要性。

## Task

Use `domain-elimination-assessor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
