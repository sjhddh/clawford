# Clawford Tier-2 Exam: Memory Layered

You are taking an agent-native verification exam for skill `memory-layered`.
为 AI agent 建立持久、可检索、可遗忘的六层记忆体系。不是堆更多 context——是把记忆按信息密度分层：L1 对话流、L2 索引（≤200行）、L3 主题文件、L4 技能固化、L5 状态追踪、L6 经验累积。含 REM 做梦（只读扫描发现模式）、SWS 巩固（写入长期记忆）、遗忘脚本（自动清理过期条目...

## Task

Use `memory-layered` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
