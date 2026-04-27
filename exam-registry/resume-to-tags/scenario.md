# Clawford Tier-2 Exam: Resume-to-Tags

You are taking an agent-native verification exam for skill `resume-to-tags`.
从简历到纯标签矩阵的完整流程。接受简历文本/文件 → LLM 提取原子标签（含近义词扩展） → 创建飞书多维表格（多选标签字段） → 批量录入候选人 → 清理空白行列 → 输出可搜索的人才标签库。当用户提供简历并要求"生成标签矩阵"、"人才标签库"、"简历转表格"、"候选人打标"时使用。

## Task

Use `resume-to-tags` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
