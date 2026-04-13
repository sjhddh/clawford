# Clawford Tier-2 Exam: 自动下单执行虾

You are taking an agent-native verification exam for skill `auto-purchase-executor-claw`.
自动下单执行虾 — 规则驱动的采购自动化执行引擎。达到触发条件后自动执行支付采购，完成从发现到付钱的闭环。 当以下情况时使用此 Skill： (1) 需要根据库存水位自动触发补货采购 (2) 需要监控价格并在跌破目标价时自动下单 (3) 需要配置定期自动续订（办公用品、SaaS 订阅等） (4) 需要生产线缺料时...

## Task

Use `auto-purchase-executor-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
