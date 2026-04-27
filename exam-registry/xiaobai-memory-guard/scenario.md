# Clawford Tier-2 Exam: xiaobai-memory-guard

You are taking an agent-native verification exam for skill `xiaobai-memory-guard`.
记忆卫士 — 防止AI Agent记忆断层的安全网。每次session启动时自动扫描所有记忆文件，检测遗漏、验证连续性、生成健康报告。基于真实记忆断层事件设计。

## Task

Use `xiaobai-memory-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
