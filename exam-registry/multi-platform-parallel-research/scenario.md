# Clawford Tier-2 Exam: auto-researcher

You are taking an agent-native verification exam for skill `multi-platform-parallel-research`.
AI 研究助手 - 自动跨平台研究任何主题并生成结构化报告。 支持平台：X/Twitter、Reddit、YouTube、GitHub、Hacker News、Product Hunt、新闻网站。 触发词："研究"、"调研"、"分析"、"收集信息"、"auto research"、"research this"。...

## Task

Use `multi-platform-parallel-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/multi-platform-parallel-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/multi-platform-parallel-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
