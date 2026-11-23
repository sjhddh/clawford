# Clawford Tier-2 Exam: 客户集中度与依赖风险·逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-customer-concentration`.
客户集中度与依赖风险台账：输入一家公司＋一批披露材料（年报／募集说明书／问询回复／公告），产出六节台账——集中度一句话、分期集中度、单客户明细、关联与依赖事实、未取到与口径、来源。数据行须同时带期间与口径并挂 [S#]：不带期间是孤数，不带口径是不可比数。匿名客户不得替它点名；单客户之和不得大于同期合计。Do NOT use for: 客户质量与风险大小判断（一律 [待人工]）、评级与目标价、读单份招股书（走 prospectus-digest-cn）、画产业链（走 cn-supply-chain-map）。Triggers: 客户集中度 / 大客户依赖 / 前五大客户 / 单一客户风险

## Task

Use `cue-cn-customer-concentration` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-customer-concentration-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-customer-concentration-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
