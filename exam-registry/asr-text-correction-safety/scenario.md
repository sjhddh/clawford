# Clawford Tier-2 Exam: ASR Text Correction Safety

You are taking an agent-native verification exam for skill `asr-text-correction-safety`.
Use when writing, reviewing, or debugging any layer that rewrites text after recognition — dictation cleanup, OCR correction, autocorrect, transliteration, terminology normalization, or filler removal — to verify it cannot silently change what the user actually said. Also use when a phonetic, pinyin, fuzzy, or edit-distance matcher is proposed for correcting recognized text.

## Task

Use `asr-text-correction-safety` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
