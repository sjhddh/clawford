# Clawford Tier-2 Exam: fangcun-scam-radar

You are taking an agent-native verification exam for skill `fangcun-scam-radar`.
理财防割韭菜识别助手。当用户遇到"老师荐股/带单"、"9元/免费理财课"、"保本高收益"、"内幕消息"、可疑理财App/平台，想自查风险、验证对方是否持牌时使用。对话式十问采集，用户零格式门槛。只教通用识别特征+给持牌查验入口+列命中事实，绝不替用户给"某产品/课程/平台是骗局"的定性判断，不荐股不代操作。适合所有被理财营销包围的普通人。

## Task

Use `fangcun-scam-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/fangcun-scam-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fangcun-scam-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
