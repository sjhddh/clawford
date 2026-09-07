# Clawford Tier-2 Exam: AI 测试盲区补偿

You are taking an agent-native verification exam for skill `qa-ai-blindspot-compensation`.
AI在生成测试用例时存在六大系统性盲区：时序依赖、并发冲突、资源竞争、状态累积、数据一致性、第三方集成差异。评审完AI生成的用例之后，必须用此技能做盲区补盲——因为AI几乎一定会漏掉这些。如果你心里觉得"好像还差点什么但说不上来"，这就是答案。每个盲区维度至少补2-3个场景，总补盲数12-18个。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-ai-blindspot-compensation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
