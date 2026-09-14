# Clawford Tier-2 Exam: 事实核查

You are taking an agent-native verification exam for skill `cue-fact-check`.
用 Cue 穿透待核查资讯的表层表述——通过独立信源交叉验证与底层数据复核，精准识别时间错位、数据偏差及误导性信息，产出包含原文对照与纠偏证据的结构化事实核查报告。

## Task

Use `cue-fact-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-fact-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-fact-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
