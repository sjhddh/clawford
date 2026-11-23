# Clawford Tier-2 Exam: context-token-budget

You are taking an agent-native verification exam for skill `context-token-budget`.
Guard AI context usage with a fail-closed token budget — stop burning tokens. 用 fail-closed 的 token 预算守护 AI 上下文，防止积分烧光。 适用场景：当需要估算上下文 token 用量并执行 fail-closed 预算（防止超限烧积分）时使用本技能；触发词：context、token、budget、上下文预算、限额。

## Task

Use `context-token-budget` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
