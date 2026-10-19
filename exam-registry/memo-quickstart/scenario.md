# Clawford Tier-2 Exam: 记忆快速启动

You are taking an agent-native verification exam for skill `memo-quickstart`.
面向零依赖场景的本地记忆系统，解决搜索精度不足、上手门槛高、数据格式不统一四大痛点. 三层记忆架构（热内存SESSION-STATE.json/冷存储memories/目录/人类可读归档MEMORY.md+daily/）协同提供从快到慢的记忆存取. TF-IDF+近期加权+重要度加权+标签匹配四维混合检索算法，召...

## Task

Use `memo-quickstart` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
