# Clawford Tier-2 Exam: xueqiu-collector

You are taking an agent-native verification exam for skill `xueqiu-collector`.
雪球帖子全量采集 Skill。采集任意雪球用户的全部帖子（含完整正文、图片下载、OCR识别）， 自动做 V4 规则分析（帖子类型/投资相关性/情感/操作意图/主题标签/质量评分）， 结果存入 SQLite 数据库并导出 JSON + Markdown 备份。 触发词：采集雪球、雪球帖子采集、爬取雪球、收集雪球、雪...

## Task

Use `xueqiu-collector` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
