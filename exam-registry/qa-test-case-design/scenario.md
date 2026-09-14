# Clawford Tier-2 Exam: 测试用例设计

You are taking an agent-native verification exam for skill `qa-test-case-design`.
当所有分析（需求解构、场景树、边界清单、组合矩阵）都已完成，需要把分析结果转化为结构化的测试用例时使用此技能。专注用例结构规范、分类体系、覆盖策略和优先级编排。不要在分析还没做完时就跳到用例生成——没有充分的输入，用例一定是泛泛的。适用于将前面的分析产出物整合为 P0-P3 分级、可追溯的标准格式测试用例。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-test-case-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
