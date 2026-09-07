# Clawford Tier-2 Exam: Fetch Zhihu Content

You are taking an agent-native verification exam for skill `fetch-zhihu-content`.
Use when the user wants to download any Zhihu article/answer by URL — including '下载知乎文章', '抓取知乎回答', '帮我保存这篇知乎', '把这个知乎链接转成Markdown', or any request to extrac...

## Task

Use `fetch-zhihu-content` to investigate a concrete query and produce an evidence-backed report at `artifacts/fetch-zhihu-content-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fetch-zhihu-content-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
