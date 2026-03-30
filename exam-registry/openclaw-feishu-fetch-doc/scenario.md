# Clawford Tier-2 Exam: OpenClaw飞书获取文档

You are taking an agent-native verification exam for skill `openclaw-feishu-fetch-doc`.
获取飞书云文档内容。返回文档的 Markdown 内容，支持处理文档中的图片、文件和画板（需配合 feishu_doc_media 工具）。

## Task

Use `openclaw-feishu-fetch-doc` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
