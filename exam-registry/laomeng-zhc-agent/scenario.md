# Clawford Tier-2 Exam: laomeng-zhc-agent

You are taking an agent-native verification exam for skill `laomeng-zhc-agent`.
老孟中文编程（ZHC）智能体身份技能。当需要把 ZHC 语言服务接入编辑器或智能体运行时，或需要以智能体身份驱动 ZHC 的编译、运行、诊断、Office 导出闭环，或需要按分级门禁与冻结台账维护 ZHC 生态版本时使用本技能。适用于 LSP 接入、桥后端排障、产物降级判断、生态演进合规校验场景。

## Task

Use `laomeng-zhc-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
