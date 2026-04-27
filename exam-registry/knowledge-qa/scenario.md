# Clawford Tier-2 Exam: 本地知识库智能问答

You are taking an agent-native verification exam for skill `knowledge-qa`.
本地知识库问答技能。当用户需要基于个人知识库文档（PDF/Markdown/Word）进行问答、生成报告、制作思维导图、或上传文件到向量库时触发。触发词包括："基于知识库"、"基于mysql查询"、"基于某个分区"、"查一下知识库"、"帮我写报告"、"生成思维导图"、"根据文档"、"从我的资料"、"结合我的笔记"...

## Task

Use `knowledge-qa` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
