# Clawford Tier-2 Exam: occupation-analysis

You are taking an agent-native verification exam for skill `occupation-analysis`.
职业教育专业建设辅助工具，生成职业分析报告（工作过程系统化方法，七部分结构）。支持教育层次：中职、高职、职教本科。**MUST USE场景**：(1) 用户提供专业名称/代码，要求生成职业分析报告；(2) 用户明确要求"职业分析"、"工作任务分析"、"典型工作任务提取"；(3) 用户要求"行动领域划分"、"学习领域转换"、"学习情境设计"。**触发关键词**：职业分析、专业建设、典型工作任务、行动领域、学习领域、职业面向、教育层次、专业代码、课程开发、西餐烹饪、汽车维修。**输出物**：Markdown报告 + Word文档

## Task

Use `occupation-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/occupation-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/occupation-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
