# Clawford Tier-2 Exam: bug-pattern-diagnosis

You are taking an agent-native verification exam for skill `bug-pattern-diagnosis`.
根据用户描述的 bug 现象（症状）匹配已沉淀的 bug 案例库，快速判断这是哪类问题、根因在哪、如何排查。每次成功诊断后会把新案例沉淀到案例库，持续积累经验。适用于用户报告"奇怪的报错 / 间歇性失败 / 某些环境才复现 / 日志很诡异"的场景。

## Task

Use `bug-pattern-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
