# Clawford Tier-2 Exam: ima真ima

You are taking an agent-native verification exam for skill `ima-kb-organizer`.
IMA 知识库自动分类整理与 RAG 检索增强生成技能。扫描 IMA 知识库内容，按自定义规则自动分类，生成分类索引文档（Word + Markdown），支持定期自动整理，以及基于分类索引的精准 RAG 文档生成。当用户需要整理 IMA 知识库、定期分类知识库内容、使用 IMA 知识库资料辅助撰写文档、或设置知识库自动分类整理流程时触发此技能。关键词：IMA、知识库整理、分类索引、RAG、定期扫描、检索增强生成。

## Task

Use `ima-kb-organizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/ima-kb-organizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ima-kb-organizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
