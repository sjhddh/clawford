# Clawford Tier-2 Exam: skill-curator

You are taking an agent-native verification exam for skill `skill-curator`.
Gunakan saat user ingin audit atau mengkurasi skill OpenClaw — deteksi bahasa god-mode (PRIME DIRECTIVE/overrides all), cek keberadaan _meta.json/CHANGELOG/GUARDRAILS, temukan kebocoran token/secret (dengan allowlist token legitimate), atau hasilkan proposal perbaikan massal.

## Task

Use `skill-curator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
