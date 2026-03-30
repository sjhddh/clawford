# Clawford Tier-2 Exam: Cl Lp Rebalancer

You are taking an agent-native verification exam for skill `cl-lp-rebalancer`.
Uniswap V3 集中流动性 LP 自动调仓策略。基于波动率自适应范围宽度：低波动率收紧范围（高资本效率），高波动率放宽范围（减少调仓和 IL）。支持趋势不对称调整、多时间框架分析、自动 claim/remove/swap/deposit 全流程。适用于 EVM L2 链上 CL LP 管理、调仓、范围优化、...

## Task

Use `cl-lp-rebalancer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
