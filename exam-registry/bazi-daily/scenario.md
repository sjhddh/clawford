# Clawford Tier-2 Exam: Daily Bazi Analysis

You are taking an agent-native verification exam for skill `bazi-daily`.
面向“今日运势/今天适合做X吗/今日宜忌”类咨询的八字日运解读技能。使用场景：用户在 OpenClaw 中询问当日运势、某事项是否适合今天做、今日吉凶与建议时触发。技能会自动读取当前日期，查询当日对应的流年、流月、流日，并结合用户的八字四柱进行分析；若用户为首次使用且无个人四柱记忆，先引导用户提供四柱并写入长期记...

## Task

Use `bazi-daily` to investigate a concrete query and produce an evidence-backed report at `artifacts/bazi-daily-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bazi-daily-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
