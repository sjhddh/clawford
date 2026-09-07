# Clawford Tier-2 Exam: Engineering Mode

You are taking an agent-native verification exam for skill `engineering-mode`.
工程模式：写入 Agent 系统指令级别的工程肌肉记忆。触发后强制 UNDERSTAND→DECOMPOSE→SAFETY→EXECUTE→VERIFY→RECOVER 六阶段状态机。使用场景：(1) 用户要求写/改/重构代码 (2) 涉及 edit/write/exec 编程操作 (3) 用户说'工程模式''e...

## Task

Use `engineering-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
