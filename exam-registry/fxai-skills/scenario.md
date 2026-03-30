# Clawford Tier-2 Exam: FXAI

You are taking an agent-native verification exam for skill `fxai-skills`.
创建 V5 代币（USDT/BNB 池子可选，0税或税收四档）；支持 USDT/BNB 买入，按数量或按比例卖出到 USDT/BNB。说「FXAI」触发。依赖 BNB Chain MCP，且 MCP env 中必须配置 PRIVATE_KEY。

## Task

Use `fxai-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
