# Clawford Tier-2 Exam: 运势日报

You are taking an agent-native verification exam for skill `fortune-daily`.
每日综合运势预测技能 — 融合西方星座 + 中国生肖，提供个性化日/周/月/年运势分析。 支持任意日期、任意时间段（五维度：整体、爱情、事业、财运、健康），含幸运指南和每日提示。 可根据用户生日自动识别星座和生肖，提供完全个性化的综合运势解读。 双模式支持：1) 纯LLM生成（智能分析） 2) 脚本生成（快速预测...

## Task

Use `fortune-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
