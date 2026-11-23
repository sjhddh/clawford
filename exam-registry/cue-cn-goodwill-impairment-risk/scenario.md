# Clawford Tier-2 Exam: 商誉减值风险·逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-goodwill-impairment-risk`.
A股商誉科目专项台账：把一份年报或收购公告的商誉科目拆成八节——商誉余额、被收购标的、业绩承诺完成度、减值测试关键假设、本次计提与未计提，每行挂原句与锚；计提金额与比例只认披露原句，卡面不得拿余额减可收回金额自算。缺的逐条写未取到，两向点名。机检 check_goodwill.py 五道：形制／原句与锚／红线／未取到与不得自算／边界，零网络。Do NOT use for: 会不会减值、计提是否充分、评级与目标价、股价预测、重组事件与对价跟踪（走 cn-restructuring-tracker）。Triggers: 商誉减值 / 商誉余额 / 业绩承诺完成度 / 减值测试关键假设 / 计提比例

## Task

Use `cue-cn-goodwill-impairment-risk` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
