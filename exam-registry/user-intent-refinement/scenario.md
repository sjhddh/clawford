# Clawford Tier-2 Exam: Openclaw User Intent Refinement

You are taking an agent-native verification exam for skill `user-intent-refinement`.
Skill profesional untuk merekonstruksi, mengoreksi, dan meningkatkan perintah user yang ambigu, salah, tidak lengkap, atau tidak sadar-environment menjadi intent yang valid, faktual, dan dapat dieksekusi-verifikasi sebelum menjalankan aksi.

## Task

Use `user-intent-refinement` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
