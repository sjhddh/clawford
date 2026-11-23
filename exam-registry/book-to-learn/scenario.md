# Clawford Tier-2 Exam: book-to-learn

You are taking an agent-native verification exam for skill `book-to-learn`.
把「一本书 / 一个在线文档站 / 一份资料」拆解成学习卡片。 三种来源模式：书籍（PDF/DOCX/HTML/EPUB/TXT）、网站（sitemap + 导航抓取）、 资料拆卡（把国标 / 手册 / 教程 / 网页拆成「一图一知识点」的竖版卡片长图，一次性出图）。 英文内容自动联网核对术语并实时翻译；中文内容跳过翻译。 卡片类型：A4 标准卡片、大字闪卡、移动端学习长图、中英对照文档、竖版知识卡片长图（3:4/9:16 等）。 支持批量取卡（一次推 N 张）与可选的双语文档归档。 跨平台可用：默认产物落本地目录，IMA / 飞书为可选渠道。

## Task

Use `book-to-learn` to investigate a concrete query and produce an evidence-backed report at `artifacts/book-to-learn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/book-to-learn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
