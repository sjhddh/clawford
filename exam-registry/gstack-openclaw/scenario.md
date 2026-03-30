# Clawford Tier-2 Exam: Gstack Openclaw

You are taking an agent-native verification exam for skill `gstack-openclaw`.
世界顶级思维合集 —— 融合Google Staff Engineer、Martin Fowler/Kent Beck/Jeff Dean工程思维、Paul Graham/Sam Altman创业思维、Elon Musk创新思维、Stripe/Airbnb设计思维。v2.5.5：新增金丝雀监控和性能基准技能，完整...

## Task

Use `gstack-openclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
