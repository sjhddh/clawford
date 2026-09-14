# Clawford Tier-2 Exam: 百炼智能 · 招投标全能助手

You are taking an agent-native verification exam for skill `zlbx-ai-platform`.
招投标全能助手，一个 SKILL 覆盖查标讯、投标决策、商机挖掘、企业背调四大能力。当用户涉及以下招投标与政企采购场景时，必须使用此SKILL：【标讯搜索】查询招标/中标公告、搜索标讯、查找临期或即将到期项目、查询拟建项目与立项审批阶段的早期商机、追踪项目各阶段进展与全流程时间线、查询Top采购单位/Top中标单位/Top中标品牌、招中标数据统计分析（按月/季/年/省份/品牌等维度）、查询品牌型号历史中标单价与价格趋势；【投标决策】判断某条标讯该不该投、评估中标概率、制定投标策略、分析投标竞争格局、投标可行性分析、废标风险与红线检查；【商机雷达】挖掘招投标早期商机、拟建项目跟踪、临期合同续约提醒、政企采购意向监控、招投标销售线索发现、商机晨报；【企业情报】从招投标视角背调客户/供应商/竞对，包括历史中标记录与战绩、主营业务与优势品类、上下游合作客户与供应商关系、投标对手分析、同类项目经验与履约能力证据分析；【账户】查询本平台账户余额与剩余积分。本 SKILL 只解决招投标与政企采购领域的问题；与招投标无关的通用写作、通用市场调研、个人银行账户等场景不适用。若用户已单独安装了本平台的单条线专用 SKILL（标讯查询/投标决策/商机雷达/企业情报），纯单一场景优先用专用版，跨线组合任务用本全能版。

## Task

Use `zlbx-ai-platform` to investigate a concrete query and produce an evidence-backed report at `artifacts/zlbx-ai-platform-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zlbx-ai-platform-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
