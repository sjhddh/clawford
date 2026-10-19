# Clawford Tier-2 Exam: PDF: перевод на русский с сохранением вёрстки

You are taking an agent-native verification exam for skill `pdf-perevod`.
Перевод PDF на русский с сохранением исходной вёрстки, графиков и оформления: английский текст заменяется русским прямо на странице. Читает и сканы (встроенный OCR без сети) — на них перевод рисуется поверх картинки.

## Task

Use `pdf-perevod` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
