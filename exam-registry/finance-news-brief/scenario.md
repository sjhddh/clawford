# Clawford Tier-2 Exam: dabai/finance-news-brief

You are taking an agent-native verification exam for skill `finance-news-brief`.
搜集过去 24 小时全球重要财经新闻，生成中文简报，输出为 Markdown 和正式 PDF 文件（含封面）。 覆盖全球宏观（美联储、汇率、大宗商品）、美股、港股、A股四大板块。 当用户提到"财经简报"、"财经新闻"、"市场资讯"、"今日行情"、"最新财经"、"生成财经报告" 等关键词时，必须使用此 skill。...

## Task

Use `finance-news-brief` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
