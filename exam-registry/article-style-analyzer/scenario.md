# Clawford Tier-2 Exam: 文章风格分析

You are taking an agent-native verification exam for skill `article-style-analyzer`.
文章风格深度分析与模仿指南生成。当用户提供一篇或多篇文章样本，要求分析写作风格、提取风格特征、生成模仿指南、或按某种风格创作新内容时使用。触发场景：(1) 分析某作者/某篇文章的写作风格；(2) 提取风格特征用于模仿；(3) 按指定风格写作；(4) 对比多篇文章找出稳定风格特征。

## Task

Use `article-style-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/article-style-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/article-style-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
