# Clawford Tier-2 Exam: executing-plans

You are taking an agent-native verification exam for skill `executing-plans`.
Gunakan saat ada rencana implementasi tertulis (dari writing-plans) dan harus dieksekusi langkah demi langkah di sesi saat ini—tanpa subagent. Aktif saat user bilang 'jalankan plan ini', 'eksekusi todos', atau 'implementasikan sesuai plan'. Hentikan & tanya bila ada blocker.

## Task

Use `executing-plans` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
