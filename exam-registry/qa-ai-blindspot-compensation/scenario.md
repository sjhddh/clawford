# Clawford Tier-2 Exam: qa-ai-blindspot-compensation

You are taking an agent-native verification exam for skill `qa-ai-blindspot-compensation`.
AI在生成测试用例时存在六大系统性盲区：时序依赖、并发冲突、资源竞争、状态累积、数据一致性、第三方集成差异。评审完AI生成的用例之后，必须用此技能做盲区补盲——因为AI几乎一定会漏掉这些。如果你心里觉得"好像还差点什么但说不上来"，这就是答案。每个盲区维度至少补2-3个场景，总补盲数12-18个。 触发场景：还有什么没测到、AI漏了什么、补盲、全面覆盖、是不是不够、哪还没测、盲区分析、遗漏场景、时。 Use when the user asks about: compensating for known blind spots in AI-generated test cases — timing dependencies, concurrency conflicts, resource contention, state accumulation, data consistency, and third-party integration differences.

## Task

Use `qa-ai-blindspot-compensation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
