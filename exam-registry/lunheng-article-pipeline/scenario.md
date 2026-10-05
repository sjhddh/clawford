# Clawford Tier-2 Exam: 论衡 — 严肃长文流水线

You are taking an agent-native verification exam for skill `lunheng-article-pipeline`.
学术论文/深度长文/行业分析流水线：含同行评审与期刊/发布渠道匹配建议（advisory）。不调用执行类工具（exec/process/code_execution，声明式）；主控持有会话编排与状态类工具（多 Agent 派发/收报告的设计内必需面）。标准架构 = 多 Agent 九角色；worker 不可用按节点接管并披露（详正文）。Routine 写盘（status.md / audits/）已声明；心跳为 opt-in「Operational Telemetry」。v2.14.0 起新增 G18 方法论审计（12 项清单 + D2 评分）。

## Task

Use `lunheng-article-pipeline` to investigate a concrete query and produce an evidence-backed report at `artifacts/lunheng-article-pipeline-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lunheng-article-pipeline-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
