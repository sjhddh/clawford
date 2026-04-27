# Clawford Tier-2 Exam: image2text

You are taking an agent-native verification exam for skill `image2text`.
Extract text from images using tesseract OCR, supporting local files, URLs, and base64 inputs for text-only AI models without vision capability.

## Task

Use `image2text` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
