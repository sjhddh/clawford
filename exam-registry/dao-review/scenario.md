# Clawford Tier-2 Exam: DaoReview

You are taking an agent-native verification exam for skill `dao-review`.
文档审核评分工具。当用户要求"审核文档"、"检查文档"、"给文档打分"、"评估文档"、"分析文档"、或上传 .docx/.txt/.md 文件进行审查时触发。执行文档内容分析，从结构完整性、内容质量、格式规范、逻辑性等维度给出评分和改进建议。

## Task

Use `dao-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
