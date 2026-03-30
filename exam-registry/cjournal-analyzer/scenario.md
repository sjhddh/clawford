# Clawford Tier-2 Exam: c刊期刊分析

You are taking an agent-native verification exam for skill `cjournal-analyzer`.
C刊（CSSCI来源期刊）论文全面分析工具。当用户提供一个具体的C刊期刊名称（如"管理世界"、 "社会学研究"、"经济研究"等）时，自动通过知网（CNKI）查询该期刊最近5年所有期次的文章 目录、作者和摘要信息，并生成专业的Word分析报告。报告包含：选题热点趋势、高频关键词、 研究方法偏好、核心作者群、栏目主题...

## Task

Use `cjournal-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/cjournal-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cjournal-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
