# Clawford Tier-2 Exam: vaDeepresearch

You are taking an agent-native verification exam for skill `vadeepresearch`.
系统化深度研究技能。适用于联网研究、市场分析、竞品分析、行业研究、技术调研、论文与开源项目梳理、报告写作前置调研、PPT/文档/方案生成前的信息搜集与深度分析。当用户提出深度分析xxx、帮我分析xxx、快速分析xxx、深度研究xxx、详细分析xxx等话术时使用该 skills。必须输出 Markdown（.md）文件，并提供下载地址或可直接打开的文件入口。

## Task

Use `vadeepresearch` to investigate a concrete query and produce an evidence-backed report at `artifacts/vadeepresearch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vadeepresearch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
