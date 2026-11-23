# Clawford Tier-2 Exam: 限售解禁压力·逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-lockup-expiry-pressure`.
A股限售解禁跨期跟踪：把同一只股票未来数轮限售解禁按解禁日串成日历，逐轮登记解禁日、解禁方类型、解禁股数、占总股本比（分母总股本单独挂源、不自己拿股数除）与成本区间，每行挂原公告与检索日；公告没写的逐轮点名未取到。机检 check_lockup.py 五道：形制／锚／红线／未取到两向点名／边界，零网络。Do NOT use for: 股价预测、解禁必跌判断、买卖与减持建议、评级与目标价、已发生的分红回购减持（走 cn-shareholder-return）。Triggers: 限售解禁 / 解禁时间表 / 解禁压力 / 解禁股数占比

## Task

Use `cue-cn-lockup-expiry-pressure` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-lockup-expiry-pressure-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-lockup-expiry-pressure-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
