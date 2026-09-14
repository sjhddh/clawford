# Clawford Tier-2 Exam: Mineru Extract

You are taking an agent-native verification exam for skill `mineru`.
当用户想要使用 MinerU 从 PDF 或图片文件中提取关键信息时触发。适用于"使用 MinerU"、"从 PDF 提取文本"、"文档关键信息提取"、"解析 PDF"、"解析图像"、"上传文件到 MinerU"等请求。

## Task

Use `mineru` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
