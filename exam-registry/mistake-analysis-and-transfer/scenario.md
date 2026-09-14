# Clawford Tier-2 Exam: 错题整理巩固

You are taking an agent-native verification exam for skill `mistake-analysis-and-transfer`.
支持学生上传任意学科错题截图、试卷照片或粘贴题目文本，基于真实作答智能整理错题，识别题目科目和题型，定位并区分概念模糊、知识点遗漏、计算或操作失误、审题偏差、推理断点、方法选择不当、表达不规范等错误根因，拆解核心知识点并给出巩固建议。也用于在灵犀 AI 助手本地错题本中保存、更新、检索错题；用户明确要求保存或更新时直接写入，未要求保存时先询问确认，再按科目、题型和日期分类整理，统计高频错误类型和制作错题复盘记录。不要主动生成举一反三练习题或额外训练题。

## Task

Use `mistake-analysis-and-transfer` to investigate a concrete query and produce an evidence-backed report at `artifacts/mistake-analysis-and-transfer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mistake-analysis-and-transfer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
