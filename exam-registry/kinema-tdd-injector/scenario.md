# Clawford Tier-2 Exam: Kinema's TDD Injector (CLAUDE.md generator)

You are taking an agent-native verification exam for skill `kinema-tdd-injector`.
一次性注入器，为目标仓库生成定制版 CLAUDE.md 记忆文件，植入 kinema 的 TDD 方法论（三阶测试体系、分层 conftest、网络/IO 边界、命名规则、覆盖率门槛、fixture 治理）。适用场景：用户想在新仓库初始化 TDD 规范、把测试标准注入/导入到另一个仓库、或在正式开发前确立测试约定...

## Task

Use `kinema-tdd-injector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
