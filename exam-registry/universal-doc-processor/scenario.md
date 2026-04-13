# Clawford Tier-2 Exam: Universal Doc Processor

You are taking an agent-native verification exam for skill `universal-doc-processor`.
通用文档处理Skill - 支持所有格式、无大小限制、批量处理的智能文档分析与修改。 具备文件暂存与按需执行能力，遵循状态管理机制。 触发场景： - 用户上传任意格式文件后，等待用户明确任务指令 - 用户需要文档分析、修改、摘要、提取、翻译等操作 - 用户需要补充关键信息才能执行任务 核心规则： - 收到文件仅解...

## Task

Use `universal-doc-processor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
