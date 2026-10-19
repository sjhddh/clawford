# Clawford Tier-2 Exam: Study Abroad Assistant - 留学助理

You are taking an agent-native verification exam for skill `study-abroad-assistant`.
美国研究生申请助理（美国 · 理工大类：CS/EE/Data 等）— 引擎增强版专家 skill。
提供：竞争力画像、申请计划制定与执行跟踪、分层选校、文书逐段反馈、套磁草稿、报告生成。
Use when: 用户请求留学申请帮助、竞争力评估、选校、文书润色、套磁、申请计划。
Trigger: 留学申请, 美研申请, 研究生申请, 选校, 竞争力评估, 文书反馈, 套磁, 申请计划, study abroad, grad school, MS application
Pricing: Free skill; 画像/文书/套磁/报告按次匿名试用（5 次/7 天），检索与计划不消耗额度

## Task

Use `study-abroad-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/study-abroad-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/study-abroad-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
