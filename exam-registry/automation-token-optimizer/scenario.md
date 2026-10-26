# Clawford Tier-2 Exam: 定时任务管理·Token节约

You are taking an agent-native verification exam for skill `automation-token-optimizer`.
定时任务越建越多，token 越烧越狠？想审计定时任务却不知道从何下手？定时任务管理（含token节约）（scheduled task audit / token optimizer / automation audit / 任务合并）做全生命周期管理：自动读取数据库扫描所有 agent 定时任务，统计 token 消耗排行，做消耗审计 + 合并评估 + 冗余清理，找出高消耗任务、可合并任务、可删除任务，给出综合优化方案。当用户说「哪些定时任务消耗token最多」「帮我审计定时任务」「如何合并定时任务」「精简任务」「我想清理自动化任务」时触发。Use when your scheduled tasks are piling up and burning tokens. 支持月度自动审计与场景化配置，报告可直接作为精简依据。触发词：定时任务、token消耗、token优化、合并任务、冗余清理、scheduled task、automation audit。

## Task

Use `automation-token-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
