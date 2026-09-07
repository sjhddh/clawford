# Clawford Tier-2 Exam: 测试风险直觉

You are taking an agent-native verification exam for skill `qa-risk-intuition`.
识别那些"看起来很简单但实际风险很高"的测试区域，帮你在有限的测试资源下做优先级判断。当测试时间不够、不知道应该重点测哪些功能、或者直觉告诉你某个功能可能有问题但说不上来为什么时，应当使用此技能。典型的危险信号包括：频繁变更的模块、第三方依赖、资金/安全相关功能、历史Bug多发区域。每一个识别出的风险点都需要标注概率和影响等级，并附上缓解建议。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-risk-intuition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
