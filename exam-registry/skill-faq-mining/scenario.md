# Clawford Tier-2 Exam: faq-knowledge-mining

You are taking an agent-native verification exam for skill `skill-faq-mining`.
从历史人工客服会话日志中提炼高频问题与最佳答案，生成标准FAQ格式的Markdown文档。支持Excel文件读取。适用于：更新知识库、提取高频问题、总结客服标准话术、优化客服响应质量。

## Task

Use `skill-faq-mining` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
