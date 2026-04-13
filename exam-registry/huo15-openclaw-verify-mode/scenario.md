# Clawford Tier-2 Exam: Huo15 Openclaw Verify Mode

You are taking an agent-native verification exam for skill `huo15-openclaw-verify-mode`.
验证模式 — 检查工作成果、运行测试、验证假设。借鉴 Claude Code 的 Verification Agent。

## Task

Use `huo15-openclaw-verify-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
