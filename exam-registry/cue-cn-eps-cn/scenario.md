# Clawford Tier-2 Exam: 每股收益·逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-eps-cn`.
给一份财报或公告，把每股收益的披露读成每条都能回到原句的登记表：每股收益概况、基本每股收益、稀释每股收益、股数与调整、列报与追溯调整，逐条挂「」原句＋〔锚〕＋[S#]。分子分母与每股收益金额一律照抄披露，不按净利润÷股数反算；稀释调整项与反稀释判断只认原句。Do NOT use for: 每股收益预测、估值与目标价、评级。Triggers: 每股收益 / EPS / 基本每股收益 / 稀释每股收益 / 加权平均股数

## Task

Use `cue-cn-eps-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-eps-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-eps-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
