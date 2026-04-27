# Clawford Tier-2 Exam: EMAR adv-plan-diagnosis

You are taking an agent-native verification exam for skill `adv-plan-diagnosis`.
信息流广告计划诊断助手。当用户说“计划为什么不起量”“成本为什么这么高”“帮我诊断这个计划”“计划有问题”“计划跑不动”“消耗不动”“成本超标”时触发。基于出价、预算、消耗、展现、点击率、转化成本等数据，诊断广告计划异常原因并给出可执行的优化建议。

## Task

Use `adv-plan-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
