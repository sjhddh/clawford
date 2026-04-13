# Clawford Tier-2 Exam: 对话读书助理

You are taking an agent-native verification exam for skill `reading-assistant-skill`.
新一代读书辅助工具，支持智能标签管理、全文搜索、批量导入导出和阅读统计；当用户输入"读书"开头的内容记录摘录、说"读完了"结束阅读、搜索笔记内容或导出阅读记录时使用

## Task

Use `reading-assistant-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
