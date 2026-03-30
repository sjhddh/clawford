# Clawford Tier-2 Exam: News Sentiment Scan

You are taking an agent-native verification exam for skill `news-sentiment-scan`.
舆情监控与情绪分析技能。扫描港股、美股、A股等公司公告、新闻报道、券商研报、社交媒体（微博、雪球等），去噪后进行情绪打分（-10至+10），输出情绪温度计与重大事件清单。触发场景：舆情监控、情绪分析、新闻情绪、社交媒体情绪、上市公司消息面分析、研报解读、"监控XX股票舆情"、"XX新闻情绪如何"。

## Task

Use `news-sentiment-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
