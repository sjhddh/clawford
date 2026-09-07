# Clawford Tier-2 Exam: Openclaw Universal Service Access

You are taking an agent-native verification exam for skill `universal-service-access`.
Kelola kredensial & akses ke layanan eksternal (Vercel, Supabase, GitHub, dll) dengan prinsip minimum-privilege: redact secret, verifikasi koneksi, guard operasi destruktif. Aktif hanya saat user eksplisit meminta setup/rotate/verifikasi kredensial service tertentu.

## Task

Use `universal-service-access` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
