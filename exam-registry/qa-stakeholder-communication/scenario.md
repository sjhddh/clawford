# Clawford Tier-2 Exam: 测试干系人沟通

You are taking an agent-native verification exam for skill `qa-stakeholder-communication`.
当需要告诉开发"这个 Bug 必须修"、跟产品经理沟通需求变更的影响、或者向管理层汇报质量风险时使用此技能。不同角色关注的事情不同——开发要的是复现步骤和定位信息，产品要的是影响范围和优先级建议，管理层要的是风险判断和决策依据。此技能提供针对开发/产品/管理层的沟通模板和策略。产出根据不同角色定制的沟通话术和汇报材料模板。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-stakeholder-communication` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
