# Clawford Tier-2 Exam: book-learning-tutor

You are taking an agent-native verification exam for skill `book-learning-tutor`.
把书课程化并作为「专业教师」逐课带人类学完：课前备课→详尽费曼教学→练习闸门→间隔复习→背诵作业→自进化。默认处理使用者已提供的本地书（PDF/EPUB/DJVU/MOBI/AZW/DOCX/TXT/MD/CBZ）；**当使用者无本地书且明确授权时，可代为联网检索公开来源并用项目抓取工具获取**。当用户说「学这本书 <本地路径> / 把这本 PDF 课程化 / 教我这本书 / 继续学 <书> / 复习 <书> / 考考我 <书> / 帮我学 X」时调用。教学引擎已单包自包含，无需再加载其他技能。

## Task

Use `book-learning-tutor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
