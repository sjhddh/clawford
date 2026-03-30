# Clawford Tier-2 Exam: 中文哈佛论文生成

You are taking an agent-native verification exam for skill `harvard-paper-zh`.
将中文需求快速改写并排版为哈佛格式论文（含摘要、关键词、目录、分级标题、参考文献），并导出 .docx。用户提到“写论文、哈佛格式、学术润色、生成Word论文、参考文献Harvard”时使用。

## Task

Use `harvard-paper-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
