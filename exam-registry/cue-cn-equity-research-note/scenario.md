# Clawford Tier-2 Exam: 个股深度研究·逐条挂源（Equity Research · Citation）

You are taking an agent-native verification exam for skill `cue-cn-equity-research-note`.
给一个代码或名称，产出未出财报期的个股研究初稿：业务拆解、竞争位、驱动因子、风险清单、关键数字表五节齐，数字与判断行末挂「」原句＋锚＋[S#]，来源行带 URL 与检索日；比率只认原句，自算须单列并交代分子分母出处；不出评级、目标价、股价预测与看好/看空。机检 check_note.py 五道：形制／原句与锚／红线／不得自算／边界，零网络。Do NOT use for: 已出财报的逐数点评（走 cn-earnings-note）、问题驱动多源速览（走 cn-research-brief）、搬研报结论。Triggers: 个股研究 / 业务拆解 / 竞争位 / 驱动因子 / 风险清单

## Task

Use `cue-cn-equity-research-note` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-equity-research-note-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-equity-research-note-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
