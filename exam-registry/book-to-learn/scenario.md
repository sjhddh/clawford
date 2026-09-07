# Clawford Tier-2 Exam: book-to-learn

You are taking an agent-native verification exam for skill `book-to-learn`.
把任意一本书分解成日常学习任务，每日推送一张知识点卡片。 支持中英文书籍（PDF/DOCX/HTML/EPUB/TXT），拆解为知识点后每日推送。 英文书自动联网核对术语并实时翻译；中文书无翻译环节。 四种推送模板：PDF标准卡片、PDF大字闪卡、飞书交互卡片、飞书卡片+图片补充。 提示词与数据分离，可自由变体为单词学习、诗词海报、新闻讲解等任务。

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
