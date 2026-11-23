# Clawford Tier-2 Exam: 本地向量记忆免费版

You are taking an agent-native verification exam for skill `elite-longterm-memory-local-free`.
面向 AI Agent 的基础本地记忆系统，提供热内存与文件归档两层记忆能力. 热内存（SESSION-STATE.md）抗压缩与重启，通过 WAL 协议确保先写状态再回复. 精选归档（MEMORY.md + daily/）提供人类可读的长期记忆与每日日志. 所有数据完全存储在本地文件系统，无需 Ollama 或...

## Task

Use `elite-longterm-memory-local-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
