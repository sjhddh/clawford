# Clawford Tier-2 Exam: 公众号内容提取

You are taking an agent-native verification exam for skill `wxpublic-fetch`.
从微信公众号抓取文章并保存为本地 Markdown 文件。当用户提到"抓取公众号"、"获取公众号文章"、"下载微信文章"、"爬公众号"、"保存公众号内容"，或指定公众号名称和日期范围想要获取文章时，使用此 skill。抓取完成后记录所有保存的 md 文件路径，方便用户后续问答。

## Task

Use `wxpublic-fetch` to investigate a concrete query and produce an evidence-backed report at `artifacts/wxpublic-fetch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wxpublic-fetch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
