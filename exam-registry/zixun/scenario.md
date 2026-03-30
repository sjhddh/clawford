# Clawford Tier-2 Exam: Daily Market Analysis

You are taking an agent-native verification exam for skill `zixun`.
每日市场分析技能。当用户要求"每日市场分析"、"今日市场"、"隔夜行情"、"盘前分析"、"市场早报"、"市场概况"时，必须使用此技能。覆盖美股、港股、A股三大市场的隔夜表现，提取重点新闻，并给出今日投资建议。适用于每天早晨的投资决策参考。Use this skill for any request involvi...

## Task

Use `zixun` to investigate a concrete query and produce an evidence-backed report at `artifacts/zixun-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zixun-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
