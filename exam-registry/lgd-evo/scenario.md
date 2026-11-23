# Clawford Tier-2 Exam: lgd-evo

You are taking an agent-native verification exam for skill `lgd-evo`.
lgd-evo — LGD 演化中枢（meta 薄分发器）。把 GovernanceOS 的 EVO 阶段 1 个演化节点（agent-evolution）聚合成可检索、可一键探测的入口：部署后让智能体记录发现、演化并精炼自身操作手册。只按 slug 路由到独立子技能，不搬运、不重实现任何子技能代码。 适用场景：当需要AI 智能体自我演化/经验回流/操作手册精炼能力时使用本技能；触发词：lgd-evo、演化、自进化、经验回流。

## Task

Use `lgd-evo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
