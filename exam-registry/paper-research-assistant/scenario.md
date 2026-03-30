# Clawford Tier-2 Exam: paper-research-assistant

You are taking an agent-native verification exam for skill `paper-research-assistant`.
科研论文研读与复现自动化助手。使用当用户需要：(1) 研读论文 PDF 并提取核心内容，(2) 生成结构化研读报告，(3) 查找官方代码/数据集，(4) 编写复现代码框架，(5) 设计实验方案复现论文结果

## Task

Use `paper-research-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/paper-research-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/paper-research-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
