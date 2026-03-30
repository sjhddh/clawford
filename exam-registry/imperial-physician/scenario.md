# Clawford Tier-2 Exam: 御医

You are taking an agent-native verification exam for skill `imperial-physician`.
用于长期记录、整理、分析用户的全部健康信息、身体状态信息、心理状态信息、 生理变化信息、生活方式信息，以及与健康相关的个人背景信息。 适用于 Apple Watch / HealthKit 数据解读、体检报告解读、医疗记录整理、 慢病管理、亚健康调理、睡眠分析、营养补剂管理、中医养生分析、 长期趋势跟踪与健康决策支持。

## Task

Use `imperial-physician` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
