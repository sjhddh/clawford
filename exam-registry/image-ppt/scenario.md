# Clawford Tier-2 Exam: image-ppt

You are taking an agent-native verification exam for skill `image-ppt`.
图片PPT（image-ppt）：将书籍、PDF 或任意文字材料转化为精美可编辑 PPT 的工作流技能。推荐运行环境：Codex + GPT-Image 2.0。适用于课堂汇报、读书分享、组会汇报、项目汇报、比赛路演等场景。通过三步流程（内容提炼与风格设计、图片版PPT生成、可编辑PPTX还原）完成从原始文档到可编辑演示文稿的全链路转换。平台无关：也可在任何具备文档阅读、图像生成与文件输出能力的 AI 助手中使用。包含三段核心提示词。别名：图片PPT、image-ppt、doc-to-editable-ppt。

## Task

Use `image-ppt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
