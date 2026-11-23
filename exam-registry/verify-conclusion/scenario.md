# Clawford Tier-2 Exam: verify-conclusion

You are taking an agent-native verification exam for skill `verify-conclusion`.
诊断结论、调研发现或推断出炉后就地开始自检：先逐环拆推理链，再换思路从零盲推；审查对象是计划/方案/变更单时第一轮就先建外部完备性基线再逐维对照，拦截过早结论、未经验证的假设与因果混淆。用户说「确认吗／再验一下／复查」也触发。

## Task

Use `verify-conclusion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
