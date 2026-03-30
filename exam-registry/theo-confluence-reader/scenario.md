# Clawford Tier-2 Exam: crawl requirement from confluence

You are taking an agent-native verification exam for skill `theo-confluence-reader`.
读取Confluence需求文档并整理成指定格式。采集原则是"忠实记录"，而非"需求分析"。输出包括：{序号}_{标题}.md（每个页面一个Markdown文件）、requirement-meta.md（元信息）、images/（所有图片，文件中包含图片引用）。

## Task

Use `theo-confluence-reader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
