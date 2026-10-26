# Clawford Tier-2 Exam: 持仓催化剂日历

You are taking an agent-native verification exam for skill `cue-catalyst-calendar`.
给你持仓列表 + 时间窗，产出按日期排的盯盘日历：每条事件的日期要么已有披露在场且含明确 YYYY-MM-DD，要么 statute 原文推导且适用条件在锚内可判；未披露的推测事件、任何日期算术都进不了表。机检对评级词与褒贬零容忍（词族以机检现值为准，本文所举为常见例）；豁免只有两条口径：类型列整列不扫、官方披露词组按词形豁免。适合：财报季前置、组合盯盘节奏、投研会材料。不适合：涨跌与择时建议、事件影响判断（本件只陈述不判断，也没有留白判断位）。 Do NOT use for: trade timing, impact calls, rumour-sourced events.

## Task

Use `cue-catalyst-calendar` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-catalyst-calendar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-catalyst-calendar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
