# Clawford Tier-2 Exam: 测试提问框架

You are taking an agent-native verification exam for skill `qa-question-framework`.
当需求文档信息不够、不知道接下来该问产品什么、或者需要从开发那边获取更多技术细节时使用此技能。很多人测不好不是因为不会设计用例，而是因为一开始就没问对问题。提供需求调研、边界确认、规则挖掘、技术细节追问等不同场景的结构化提问模板，确保在测试设计前获取到足够上下文。每一个问题都标注了问谁、怎么问、什么时候问。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-question-framework` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
