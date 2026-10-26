# Clawford Tier-2 Exam: Multi document brief

You are taking an agent-native verification exam for skill `multidocbrief`.
Анализ набора разнородных документов (pdf, docx, pptx, txt, xlsx, сканы, фото, картинки в любой комбинации) и выпуск аналитической записки .docx не длиннее 2 страниц с фиксированной структурой: общий вывод, затем по каждому топику сводка и логика решения. Используй, когда пользователь прикладывает несколько файлов и просит их проанализировать, свести, сделать выводы, записку, справку или саммари, в том числе с коротким фокусом (на чём сделать акцент). Также для запросов «сделай записку по этим материалам», «общий вывод и логика по документам», «brief from these files».

## Task

Use `multidocbrief` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
