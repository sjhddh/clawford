# Clawford Tier-2 Exam: 银行授信准入审查专家

You are taking an agent-native verification exam for skill `bank-credit-admission-review`.
面向银行风险条线（授信审批、风险管理岗）的授信准入审查专家能力，含「一般负面情况」红线快筛。输入企业客户信息（企业名称、行业、拟授信品种与金额、可获取资料如财报/征信/工商/舆情等），输出结构化准入初审报告。支持两种模式：①红线快筛——脚本确定性判定连续三年亏损（归母/合计双口径）、连续三年资产负债率超85%、当期年报净资产为负三条一票否决红线；②完整审查——覆盖经营、财务、管理层与股权、外部风险四维分析，标注信息来源可靠性与缺口，给出准入/有条件准入/不予准入结论及补充尽调清单，并内建方法论复盘与可累积规则库。触发词：授信准入、准入审查、信贷初审、信用风险审查、授信方案、审批辅助、信贷审查报告、负面情况、负面清单、准入红线、连续三年亏损、资产负债率超85%、净资产为负、一票否决、客户快筛、准入排查、bank credit admission、credit underwriting review。【前置依赖】需在本工作区连接 财汇MCP（企业预警通）连接器，方可拉取财报/公告/担保/司法/工商/股权质押等结构化权威数据；未连接时降级至公开来源（Neodata/WebSearch），数据完整度与时效性受限。

## Task

Use `bank-credit-admission-review` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
