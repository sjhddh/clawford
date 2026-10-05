# Clawford Tier-2 Exam: sum_and_translate_install_check

You are taking an agent-native verification exam for skill `sum-and-translate-install-check`.
Проверяет и при необходимости доустанавливает окружение для пайплайна саммаризации и перевода PDF (langchain 1.x + paddleocr/PPStructureV3 + рендер HTML в PDF). Вызывать, когда просят сделать саммари и/или перевод по предоставленному PDF-файлу, а также перед запуском такого пайплайна.

## Task

Use `sum-and-translate-install-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
