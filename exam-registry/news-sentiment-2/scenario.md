# Clawford Tier-2 Exam: 新闻

You are taking an agent-native verification exam for skill `news-sentiment-2`.
舆情监控与情绪分析技能,扫描港股、美股、A股等公司公告、新闻报道、券商研报与社交媒体(微博、雪球),去噪后进行情绪打分(-10至+10),输出情绪温度计与重大事件清单。支持多渠道信息采集、来源权重加权、事件类型量化与操作建议生成,适用于投资决策辅助、舆情预警与市场情绪跟踪。基于Python脚本执行,通过自然语言指令驱动Agent完成任务.

## Task

Use `news-sentiment-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
