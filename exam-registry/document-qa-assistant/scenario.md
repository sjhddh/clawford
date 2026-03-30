# Clawford Tier-2 Exam: 文档问答助手

You are taking an agent-native verification exam for skill `document-qa-assistant`.
文档问答助手。基于本地文档（PDF/Word/Markdown/TXT）回答问题，支持知识库检索和多文档交叉验证。当用户需要：从文档中查找答案、基于文档回答问题、跨多个文档综合查询、验证信息一致性、生成文档摘要时使用此技能。

## Task

Use `document-qa-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
