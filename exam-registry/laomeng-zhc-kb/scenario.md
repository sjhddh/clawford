# Clawford Tier-2 Exam: laomeng-zhc-kb

You are taking an agent-native verification exam for skill `laomeng-zhc-kb`.
老孟中文编程（ZHC）工程资料库检索技能。当需要查 ZHC 的契约字段与版本口径、错误码含义与修法、关键字/内置/类型计数、门禁与冻结台账结论、教程与分发包索引、某个文档“以哪份为准”时使用本技能。适用于口径核对、版本自证、报错定位、资料溯源场景。仅提供资料与口径，不编译不执行代码。

## Task

Use `laomeng-zhc-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
