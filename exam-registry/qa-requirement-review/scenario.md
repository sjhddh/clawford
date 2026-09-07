# Clawford Tier-2 Exam: 需求评审

You are taking an agent-native verification exam for skill `qa-requirement-review`.
从完整性、清晰性、一致性、可测试性、可实现性五个维度系统化评审需求文档质量。当用户要求"评审这份需求"、"看看这个PRD写得怎么样"、或者测试用例设计前需要先评估需求质量时，应当使用此技能。如果需求本身有问题（模糊/矛盾/不可测试），后续的测试设计都是徒劳。不要只在用户明确说"需求评审"时才用——任何涉及需求文档的测试任务都应先过一遍需求评审。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-requirement-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
