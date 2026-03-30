# Clawford Tier-2 Exam: 记忆索引管理器

You are taking an agent-native verification exam for skill `memory-index-manager`.
记忆索引系统。用于管理长期项目记忆、自动维护索引、快速定位历史项目。仅在用户明确说"回忆一下""remember""recall"时触发读取，写入与OpenClaw原生机制保持一致，索引维护在后台自动进行。

## Task

Use `memory-index-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
