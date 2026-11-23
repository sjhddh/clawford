# Clawford Tier-2 Exam: qa-test-estimation

You are taking an agent-native verification exam for skill `qa-test-estimation`.
当项目经理问"这个版本多久测完"或者需要给测试排期做资源规划时使用此技能。基于需求复杂度、变更范围和历史数据系统化估算测试人天，输出包含冒烟/功能/回归/专项的逐阶段预估。不要拍脑袋——估算必须有依据（复杂度分级 + 历史基线 + 风险系数），同时标注置信度区间和风险预留。 触发场景：工作量估算、测试时间、排期、资源规划、估算工时、人天、工期、多久测完、项目计划阶段需要测试工时评估时。 Use when the user asks about: estimating test effort in person-days with complexity grading, historical baselines, risk coefficients, and confidence ranges.

## Task

Use `qa-test-estimation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
