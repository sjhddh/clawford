# Clawford Tier-2 Exam: gate-policy-generator

You are taking an agent-native verification exam for skill `gate-policy-generator`.
生成 LGD-III「有门禁」权限策略（policy-as-code），给 agent 划清可调用/需评审/禁止的工具边界与四道门禁，防越权、误删误发、失控循环。

## Task

Use `gate-policy-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
