# Clawford Tier-2 Exam: premise-and-config-audit

You are taking an agent-native verification exam for skill `premise-and-config-audit`.
「前提验证 + 配置审计」方法论，用于回答「开工前该先验什么」「我现在的工具链配置是不是较优」「方案为什么走偏了」这类问题

## Task

Use `premise-and-config-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
