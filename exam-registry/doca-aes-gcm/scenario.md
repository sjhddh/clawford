# Clawford Tier-2 Exam: doca-aes-gcm

You are taking an agent-native verification exam for skill `doca-aes-gcm`.
Use this skill when the user is doing hands-on DOCA AES-GCM work on a BlueField DPU or ConnectX NIC — configuring `doca_aes_gcm_task_encrypt` / `_task_decrypt`, querying `doca_aes_gcm_cap_*` for per-key-type (only `DOCA_AES_GCM_KEY_128` / `_256` — AES-192 not supported) and per-task support, sizing plaintext against the max-buf cap, setting source / destination mmap permissions, validating with a NIST GCMVS or RFC 5288 vector, or debugging DOCA_ERROR_* including the security-critical tag-verification-failed outcome on decrypt. Trigger even when the user does not explicitly mention "DOCA AES-GCM" or "AEAD" — typical implicit phrasings: "decrypt completion IO_FAILED", "auth tag isn't verifying", "NOT_PERMITTED on my encrypt buffer", "is AES-192-GCM on this BlueField" (no), or "encrypted record came back tampered". Refuse and route elsewhere for non-GCM AES modes (CBC / CTR / XTS — CPU OpenSSL), key management (KMS / HSM / rotation), SHA (doca-sha), or general AEAD background.

## Task

Use `doca-aes-gcm` to investigate a concrete query and produce an evidence-backed report at `artifacts/doca-aes-gcm-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/doca-aes-gcm-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
