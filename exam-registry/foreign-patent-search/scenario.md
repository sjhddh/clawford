# Clawford Tier-2 Exam: 国外专利检索

You are taking an agent-native verification exam for skill `foreign-patent-search`.
国外专利检索、美国日本欧洲专利查询。当用户说「查一下国外有没有类似专利」「美国 / 日本在这方面有哪些专利」「出海前看看海外专利」「找国外的对比文件」「海外专利布局」时使用。输出国外专利清单（Excel 能打开），原文标题加中文说明。 Describe the need in Chinese; the skill translates it into English, Japanese and Korean to search US, EP, JP, KR and PCT patents, then summarizes results in Chinese with original titles.

## Task

Use `foreign-patent-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/foreign-patent-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/foreign-patent-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
