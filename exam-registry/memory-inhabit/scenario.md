# Clawford Tier-2 Exam: Inhabit

You are taking an agent-native verification exam for skill `memory-inhabit`.
加载 SoulPod 包，以角色身份对话。支持复刻模式和伴侣模式。SoulPod 通常由 Memory-Trace 生成。

## Task

Use `memory-inhabit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
