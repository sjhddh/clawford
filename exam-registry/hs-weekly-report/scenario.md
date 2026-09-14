# Clawford Tier-2 Exam: weekly-report

You are taking an agent-native verification exam for skill `hs-weekly-report`.
把"只讲事的流水账周报"升级成"领导 30 秒读懂全局"的结构化周报。用户提供碎碎念式的本周工作流水账（或直接给出本周做了什么），此 skill 通过四步流程（建项目库 → 拆事归位 → 追问补缺 → 六要素组装）输出可直接发出的领导版周报。适用于：写周报/月报/工作汇报、周会材料、向上管理。关键设计：AI 只补缺的、不编没的，风险/下周计划/思考三样缺了必须追问用户，绝不编造。

## Task

Use `hs-weekly-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
