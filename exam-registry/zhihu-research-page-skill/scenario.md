# Clawford Tier-2 Exam: 一键生成知乎高质量回答网页（可自由剪裁）

You are taking an agent-native verification exam for skill `zhihu-research-page-skill`.
自动搜索并整合≥500次真实引用，生成知乎风格≥10万字多答主深度知识网页，支持任意比例裁剪版本输出。

## Task

Use `zhihu-research-page-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/zhihu-research-page-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zhihu-research-page-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
