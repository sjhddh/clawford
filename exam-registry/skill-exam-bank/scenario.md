# Clawford Tier-2 Exam: exam-bank

You are taking an agent-native verification exam for skill `skill-exam-bank`.
试卷转题库：真题 PDF/图片 → 内网 exam-ocr(:8000, RapidOCR) 解析 → 抽取成 17 列表头题库 Excel。适用于"把真题转成题库/excel""整理试卷成题库""PDF 真题入库"。来源：OpenClaw「真题转题库」技能的本地化版本（2026-09-08 生成，2026-09-09 迁移到 WorkBuddy）。

## Task

Use `skill-exam-bank` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
