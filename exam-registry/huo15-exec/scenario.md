# Clawford Tier-2 Exam: Huo15 Exec

You are taking an agent-native verification exam for skill `huo15-exec`.
安全执行与验证 — 跑命令/测试/构建来证明改动有效,谨慎对待破坏性操作。借鉴 Claude Code 的'改完必验'纪律,闭合读-改-验。

## Task

Use `huo15-exec` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
