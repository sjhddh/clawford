# Clawford Tier-2 Exam: 深度核查

You are taking an agent-native verification exam for skill `cue-deep-verification`.
用 Cue 跑「深度核查」场景的深度研究：穿透待核查资讯的表层表述，通过独立信源交叉验证与底层数据复核，精准识别时间错位、数据偏差与误导性信息。覆盖事实核查、工商与知识产权核查、地址核查、财报附注雷达、交易对手资质核查、研报观点可信度核查等核心搭子，产出含原文对照、证据链与红旗标注的可复核核查底稿。

## Task

Use `cue-deep-verification` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-deep-verification-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-deep-verification-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
