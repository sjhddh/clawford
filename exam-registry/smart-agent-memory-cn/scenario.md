# Clawford Tier-2 Exam: Openclaw Skills Smart Agent Memory

You are taking an agent-native verification exam for skill `smart-agent-memory-cn`.
跨平台 Agent 长期记忆系统。分层上下文供给 + 温度模型 + Skill经验记忆 + 结构化存储 + 自动归档。三层存储：Markdown（人可读，QMD 可搜索）+ JSON（结构化）+ SQLite/FTS5（高性能全文搜索）。纯 Node.js 原生模块，零外部依赖。

## Task

Use `smart-agent-memory-cn` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
