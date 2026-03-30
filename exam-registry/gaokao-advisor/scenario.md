# Clawford Tier-2 Exam: gaokao-advisor中国高考志愿规划建议

You are taking an agent-native verification exam for skill `gaokao-advisor`.
高考志愿规划顾问。根据考生省份、科类、成绩/位次、意向专业和区域，联网检索招生计划和录取数据，生成个性化志愿填报推荐（含保研率、就业去向、薪资待遇、专业前景批判分析）。当用户询问高考志愿填报、院校选择、专业推荐时调用。

## Task

Use `gaokao-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
