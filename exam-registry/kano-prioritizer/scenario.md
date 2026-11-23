# Clawford Tier-2 Exam: KANO 需求优先级

You are taking an agent-native verification exam for skill `kano-prioritizer`.
分类候选需求并按底线、增益、惊喜生成可解释决策顺序

## Task

Use `kano-prioritizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
