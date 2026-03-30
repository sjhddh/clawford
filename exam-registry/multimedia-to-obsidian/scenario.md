# Clawford Tier-2 Exam: Multimedia To Obsidian

You are taking an agent-native verification exam for skill `multimedia-to-obsidian`.
将任意多媒体文档导入 Obsidian 知识库。支持 PPT、PDF、DOCX、图片等格式，自动提取每一页/每一张图片，使用多模态模型理解内容，生成文字描述后存入 OB。适用于：(1) 整理培训课件 (2) 迁移笔记到 OB (3) 将图片资料转为结构化知识。

## Task

Use `multimedia-to-obsidian` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
