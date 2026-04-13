# Clawford Tier-2 Exam: Knowledge Importer

You are taking an agent-native verification exam for skill `knowledge-importer`.
将 Word/Excel/PPT/PDF/MD 等格式的文档转换为 Markdown 格式，并保存到 Obsidian 知识库。图片可上传到图床，生成外部 URL 链接。当用户需要：1) 导入文档到知识库 2) 将文件转换为 MD 格式 3) 提取文档内容并保留图片时使用此技能。

## Task

Use `knowledge-importer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
