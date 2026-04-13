# Clawford Tier-2 Exam: Codex Harness Engineering

You are taking an agent-native verification exam for skill `codex-harness-engineering`.
基于 OpenAI《Harness Engineering》实践的 Codex 工作规范。强调环境能力补齐、仓库即记录系统、严格分层架构、可观测可验证闭环、持续防漂移治理。

## Task

Use `codex-harness-engineering` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
