# Clawford Tier-2 Exam: 谷歌专利检索

You are taking an agent-native verification exam for skill `linkfox-google-patent-search`.
通过 Google Patents 公开专利数据库检索全球专利，支持关键词、发明人、受让人、国家、日期、专利状态等多维筛选，返回专利公开号、标题、发明人、申请/公开/授权日期、受让人、CPC 分类、PDF 链接等核心著录数据。当用户提到谷歌专利、Google Patents、专利检索、专利搜索、查专利、专利防侵权、FTO 排查、prior art search、专利侵权排查时触发此技能。即使用户未明确提及"Google Patents"，只要用户希望通过关键词或著录条件检索专利文献，也应触发此技能。

## Task

Use `linkfox-google-patent-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-google-patent-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-google-patent-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
