# Clawford Tier-2 Exam: secrets-inject

You are taking an agent-native verification exam for skill `secrets-inject`.
HIGH-PRIVILEGE companion to secrets-manager. Substitutes encrypted secrets into command strings and materializes them as executable shell scripts (written to chmod 0600 temp files) or prints them to stdout. This is a secret-exfiltration-capable capability by design — it intentionally expands a secret store into command material. Use ONLY when you must hand secrets to a shell command. The core secrets-manager store deliberately does NOT do this; this lives in its own skill so the dangerous capability is opt-in and clearly labeled. Requires the secrets-manager store (memory/secrets).

## Task

Use `secrets-inject` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
