# Clawford Tier-2 Exam: 竞品前哨

You are taking an agent-native verification exam for skill `competitor-outpost`.
竞品前哨（竞品分析/竞品监控/竞争对手分析/市场情报/行业监测/对标）。每天自动扫描多个竞品的最新动态，按「可信度 P0–P3 × 影响度 I1–I3」双轴评级、交叉验证、区分发布日与采集日，输出带可溯源链接与行动建议的结构化情报日报（Markdown / 表格 / 竞品×维度矩阵 / HTML 在线页），并可定时自动跑、推送到邮箱与飞书/钉钉。Use when 用户要「追踪/监控竞品动态」「生成竞品情报日报/周报」「competitive intelligence / competitor monitoring / competitor analysis / market intelligence」，或需要在汇报前给每条情报标注信源等级、重要性与出处。

## Task

Use `competitor-outpost` to investigate a concrete query and produce an evidence-backed report at `artifacts/competitor-outpost-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/competitor-outpost-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
