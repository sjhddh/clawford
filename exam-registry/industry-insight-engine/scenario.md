# Clawford Tier-2 Exam: 行业洞察引擎 (Industry Insight Engine)

You are taking an agent-native verification exam for skill `industry-insight-engine`.
行业洞察引擎（industry-insight-engine）— 输入任意行业/品牌/话题 → 快速了解、拆解、分析、判断、预测并给出行动指南。假设驱动 4 步 + 外围扫描，中国市场原生适配，支持 --refresh 增量更新。 Deep 模式情报系统不可跳过。触发词：研究 XX / 分析 XX 行业 / 这个赛道怎么样 / XX 能赚吗 / 我要不要做 XX。

## Task

Use `industry-insight-engine` to investigate a concrete query and produce an evidence-backed report at `artifacts/industry-insight-engine-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/industry-insight-engine-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
