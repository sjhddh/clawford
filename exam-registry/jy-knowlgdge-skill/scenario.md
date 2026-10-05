# Clawford Tier-2 Exam: Knowlgdge-Skill

You are taking an agent-native verification exam for skill `jy-knowlgdge-skill`.
智能知识库文件处理与数据集自动生成系统。上传文件后自动评估知识价值，LLM智能分类归档，通过EasyDataset生成微调数据集。使用场景：(1) 用户上传文档需要判断是否值得生成知识数据集，(2) 批量处理DOCX/PDF/Excel/图片文件转为知识库，(3) 从本地知识库搜索答案结合对话回复，(4) 部署和初始化知识库环境，(5) 管理知识库分类体系和数据集。

## Task

Use `jy-knowlgdge-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
