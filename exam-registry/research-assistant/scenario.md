# Clawford Tier-2 Exam: AI科研全流程助理

You are taking an agent-native verification exam for skill `research-assistant`.
AI科研全流程助理。覆盖文献检索→文献阅读→文献综述→研究选题→研究设计→数据分析→ 论文写作→润色校对→引用管理→投稿选刊→基金申请→学术汇报12大模块。输入研究方向/ 问题/论文/数据，自动生成交互式HTML可视化报告。面向硕博研究生、高校教师、科研人员， 一站式解决从idea到publication的全链路...

## Task

Use `research-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
