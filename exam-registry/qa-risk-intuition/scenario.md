# Clawford Tier-2 Exam: qa-risk-intuition

You are taking an agent-native verification exam for skill `qa-risk-intuition`.
识别那些"看起来很简单但实际风险很高"的测试区域，帮你在有限的测试资源下做优先级判断。当测试时间不够、不知道应该重点测哪些功能、或者直觉告诉你某个功能可能有问题但说不上来为什么时，应当使用此技能。有经验的测试看到某些变更会本能地警觉——这不是玄学，是可以结构化的信号模型：变更/业务/技术/数据/集成五大风险信号雷达，量化打分后按等级分配测试深度与资源。每个风险点带唯一 ID（RISK-{模块}-{风险类型}-{序号}）。 触发场景：风险评估、优先级、哪里风险高、风险信号、测试重点、资源分配、高优测试、需要判断测试重点、测试资源有限需要聚焦时。 Use when the user asks about: identifying high-risk areas that look simple — frequently changed modules, third-party dependencies, money and security paths, and historical defect hotspots.

## Task

Use `qa-risk-intuition` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
