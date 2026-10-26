# Clawford Tier-2 Exam: litigation-risk-monitor

You are taking an agent-native verification exam for skill `litigation-risk-monitor`.
涉诉专利风险监测与同族扩展分析技能。触发场景：用户提供目标申请人名单（1～N 个，中英文均可），希望自动检索这些申请人名下的涉诉专利，做 INPADOC 同族扩展，结合 Patsnap legal 模块与 web.search 公开诉讼信息双向交叉，输出同族基础分析（地域/技术点/法律状态/审查历史）、诉讼时间线（含涉案专利号）、涉诉案件深度分析（原被告/案号/进程/争议焦点/抗辩/结果）、核心发明人近 3 年延伸分析，并生成单一 HTML 报告 + 结构化 JSON/CSV 附件，给出地域风险、应诉预警、趋势预测三维结论。不适用于：单件专利新颖性/创造性分析（路由 novelty-check / non-obviousness-check）、纯 FTO 法律意见、无申请人名单的开放式情报、与"涉诉专利同族 + 诉讼案件 + 发明人趋势"无关的一般性问答。

## Task

Use `litigation-risk-monitor` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
