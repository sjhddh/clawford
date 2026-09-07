# Clawford Tier-2 Exam: Own Style Writer

You are taking an agent-native verification exam for skill `own-style-writer`.
通用自有文风写作 skill。用于用户要求“按我的文章风格写”“学习某个目录里的文风”“把风格素材和本次写作素材分开处理”“从本地 PDF/DOCX/PPTX/Excel/HTML/文本等素材提炼文风并写文章”时。它会主动询问哪些目录用于学习写作风格、哪些材料只用于本次写作内容，优先在用户同意上传后用 MinerU 转换文档，也可回退内置 MarkItDown 离线转换；默认先生成风格画像、素材摘要和文章大纲，待确认后才写正文。

## Task

Use `own-style-writer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
