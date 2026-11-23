# Clawford Tier-2 Exam: 股权质押与解押跟踪·逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-share-pledge-tracker`.
A股股权质押与解押跨期跟踪：把同一股东的多笔质押、解押公告串成一条余额变化线，每笔登记出质人、质权人、股数、占所持比例、占总股本比例、质押期间，累计与剩余写成前值→后值，每笔挂公告原句与锚；公告没写的逐笔写未取到，比例只认公告原句、不自己拿股数除。Do NOT use for: 平仓风险判断、质押比例高低评价、股价影响预测、评级目标价、买卖建议。Triggers: 股权质押 / 解押 / 质押比例 / 质押余额变化

## Task

Use `cue-cn-share-pledge-tracker` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-share-pledge-tracker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-share-pledge-tracker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
