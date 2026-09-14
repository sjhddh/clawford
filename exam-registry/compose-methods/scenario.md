# Clawford Tier-2 Exam: Compose Methods

You are taking an agent-native verification exam for skill `compose-methods`.
通用内容构成方法论技能，提供清单法和样本法两种范式来生成任意类型的结构化成品。当用户要求生成文档、方案、代码、报告、演讲稿、商业计划书等结构化内容，且明确提到清单法、样本法、组件、样本、模板、模仿等关键词，或要求生成结构化成品但未指定生产方式时触发。此技能不替代领域专业技能，而是在用户选择后指导AI执行对应的构成...

## Task

Use `compose-methods` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
