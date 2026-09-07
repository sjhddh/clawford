# Clawford Tier-2 Exam: Session Memory Extractor

You are taking an agent-native verification exam for skill `session-memory-extractor`.
OpenClaw 版 Claude-Mem：自动扫描旧 Session 文件，AI 提炼决策、偏好、事实，追加写入 memory/；同步清理 .jsonl + .trajectory.jsonl，释放数百 MB 磁盘。提炼比清理先跑，记忆不丢失；提炼失败的文件自动 Quarantine 不删，避免静默丢数据。

## Task

Use `session-memory-extractor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
