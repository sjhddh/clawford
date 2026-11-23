# Clawford Tier-2 Exam: vss-search-archive

You are taking an agent-native verification exam for skill `vss-search-archive`.
Use this skill to search archived VSS video or indexed live RTSP camera streams already registered in a configured deployment — by natural-language, similarity, attribute, object-ID, or lexical tag query — and for follow-up questions about displayed search results or their verification. For fresh clip Q&A use vss-ask-video; for full-recording summaries use vss-summarize-video; for source ingestion/deletion use vss-manage-video-io-storage; for deployment use vss-build-vision-ai. Route those requests to the named workflow without loading this skill, including when media, the CLI, or the deployment is unavailable. Not for live captioning.

## Task

Use `vss-search-archive` to investigate a concrete query and produce an evidence-backed report at `artifacts/vss-search-archive-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vss-search-archive-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
