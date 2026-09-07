# Clawford Tier-2 Exam: Deep Doc Processor

You are taking an agent-native verification exam for skill `deep-doc-processor`.
智能文档深度处理器。当用户需要总结文档、提炼长文核心观点、生成结构化分析报告、对多份资料交叉对比、或基于文档内容进行多轮深度问答时自动触发。支持 PDF/Word/Markdown/网页/纯文本等多种格式。关键词：总结、摘要、提炼、分析报告、文档问答、深度阅读、信息提取、交叉对比。

## Task

Use `deep-doc-processor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
