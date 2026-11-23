# Clawford Tier-2 Exam: 一键生成知乎高质量回答网页（可自由剪裁）

You are taking an agent-native verification exam for skill `zhihu-research-page-skill`.
通过大规模联网搜索自动创建知乎风格的深度知识网页，样式高度还原 zhihu.com。默认生成含 10 个回答的多答主模拟回答页面，含 ≥10 万有效中文字和 ≥500 次真实搜索引用。支持手动裁剪为任意比例版本（如"执行 5% 版本"→ ≥5 千字 / ≥25 次搜索），多次执行自动创建带版本号的独立文件夹。适用于生成知识专题页、学习路径教程、产品深度百科、行业研究报告等需要系统整理某一主题知识的场景。**[重要]100%版本约需 100 分钟且token消耗巨大，建议先生成 2% 版本检验效果**

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
