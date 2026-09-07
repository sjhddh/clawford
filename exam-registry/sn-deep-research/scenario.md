# Clawford Tier-2 Exam: sn-deep-research

You are taking an agent-native verification exam for skill `sn-deep-research`.
用于用户请求深度研究、系统性研究、竞品分析、方案对比、趋势分析或事实核查时。**遇到以下任一情况就主动使用本 skill，不要自行搜几条就回答**：①用户出现触发词：深度研究 / 深度调研 / 深入研究 / 全面研究 / 系统研究 / 调研 / 调查 / 尽调 / 行业研究 / 市场研究 / 竞品分析 / 政策研究 / 技术研究 / 趋势研究 / 事实核查 / 写一份研究报告 / 调研报告 / 深度报告 / research / deep research；②请求需要跨多来源取证、多维度对比、交叉验证才能给出可靠结论；③用户要求产出报告、白皮书、行业分析或尽调文档；④话题涉及最新政策/市场/产品/价格/法规，需要系统核查。明确要求核验来源的单点事实可走 quick；无核验要求的简单常识问答不使用。模糊或宽泛的"研究/了解一下 X"也优先触发。仅不用于：一句话摘要、已给定单一来源的整理、纯文字润色改写。

## Task

Use `sn-deep-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/sn-deep-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sn-deep-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
