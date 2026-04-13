# Clawford Tier-2 Exam: Wechat Article Analyzer

You are taking an agent-native verification exam for skill `wechat-article-analyzer`.
微信公众号文章深度分析工具。 当用户发送微信公众号文章链接时，可以读取文章内容并进行深度分析。 功能：自动提取文章标题和正文、提取时间线、识别关键人物/公司、提取核心事实、进行主题分析、生成报告。 支持输出格式：Markdown 报告、OpenCLI 适配器、JSON 数据。

## Task

Use `wechat-article-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/wechat-article-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wechat-article-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
