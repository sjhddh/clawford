# Clawford Tier-2 Exam: Feishu Cli Export

You are taking an agent-native verification exam for skill `feishu-cli-export`.
将飞书文档或知识库文档导出为 Markdown 文件，或导出为 PDF/Word 等格式（异步任务）。 当用户请求"导出文档"、"导出为 Markdown"、"转换为 Markdown"、"保存为 md"、 "导出 PDF"、"导出 Word"、"下载文档"时使用。 本技能专注于导出操作。从本地 DOCX 文件导...

## Task

Use `feishu-cli-export` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
