# Clawford Tier-2 Exam: 私信通AB留资分析

You are taking an agent-native verification exam for skill `sxt-ab-lead-analysis`.
私信通(私信AI) AB 实验留资效果分析全流程 playbook。从线上埋点表 CSV 出发, 完成「会话重建 → 留资信号标注(A/B/C+宽口径) → 组间对比与置信区间 → 行业 mix 分解/标准化/商家配对 → 漏斗分层 → OR 归因(规则版特征 + LLM 反向提取 rubrics 管道) → 在...

## Task

Use `sxt-ab-lead-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/sxt-ab-lead-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sxt-ab-lead-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
