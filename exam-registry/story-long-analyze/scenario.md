# Clawford Tier-2 Exam: Story Long Analyze

You are taking an agent-native verification exam for skill `story-long-analyze`.
长篇网文拆文。深度拆解爆款长篇小说的黄金三章、人设架构、爽点设计、节奏控制。 单一深度拆解管道：跑完黄金三章（Stage 1）后产出快速预览报告并询问是否继续全量拆解， 确认后从 Stage 2 续跑逐章摘要、聚合分析、设定关系、汇总报告，全程产物落盘 `拆文库/{书名}/`。 触发方式：/story-long-...

## Task

Use `story-long-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/story-long-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/story-long-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
