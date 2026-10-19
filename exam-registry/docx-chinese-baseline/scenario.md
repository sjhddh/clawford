# Clawford Tier-2 Exam: Chinese DOCX Typesetting Baseline

You are taking an agent-native verification exam for skill `docx-chinese-baseline`.
Locked design-token baseline for Chinese Word/DOCX documents and WeChat-native (公众号) article layouts: body 16px, section head 18px, title 23px, deep-blue #1a3a5c headings, no HTML tables/cards/backgrounds. Use when typesetting a Chinese DOCX or WeChat article, when html-to-docx output loses styles or fails on Windows, or when successive documents must stay visually consistent. Trigger keywords: 中文 docx 排版, Word 中文文档美化, html to docx 样式丢失, 16 18 23 px 基线, 深蓝标题, 公众号排版, 微信文章排版, WeChat article typesetting, 字号基线, font size baseline, Windows html-to-docx 失败, DOCX 样式. Baseline changes must update this skill first.

## Task

Use `docx-chinese-baseline` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
