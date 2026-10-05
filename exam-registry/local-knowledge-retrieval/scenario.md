# Clawford Tier-2 Exam: Knowledge Retrieval Publish

You are taking an agent-native verification exam for skill `local-knowledge-retrieval`.
A local-first document search skill with PPT/PDF support, dual-channel retrieval (keyword + AI semantic), and progressive description evolution. Designed for knowledge workers with years of local files. 给知识工作者和顾问的本地文件检索方案。支持 PPT/PDF 多格式、BM25+AI 双通道搜索、越用越聪明。适合手里有大量本地文档、不想搬上云的人。

## Task

Use `local-knowledge-retrieval` to investigate a concrete query and produce an evidence-backed report at `artifacts/local-knowledge-retrieval-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/local-knowledge-retrieval-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
