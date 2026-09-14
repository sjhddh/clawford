# Clawford Tier-2 Exam: 定时助手

You are taking an agent-native verification exam for skill `cron-assist`.
定时助手是定时调度专家的"自然语言层"。用户说"每天早上9点发日报"，它解析意图、匹配模板、生成调度命令并执行，全程无需懂 cron 语法。内置高频场景模板（日报、健康检查、收件箱巡检、周报）与成本优化策略（批量合并、降级模型、超时熔断）。 核心能力：自然语言意图解析、调度模板库、一键创建/暂停/恢复/删除、执行...

## Task

Use `cron-assist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
