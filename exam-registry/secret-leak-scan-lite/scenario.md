# Clawford Tier-2 Exam: secret-leak-scan-lite

You are taking an agent-native verification exam for skill `secret-leak-scan-lite`.
Statically scan a project directory for leaked credentials (AWS access keys, GitHub PATs, Slack tokens, private-key blocks) before committing. Prints a JSON report with masked fingerprints only — raw secret values are never emitted. Use when the user asks to check a folder for leaked secrets, exposed keys, or committed credentials.

## Task

Use `secret-leak-scan-lite` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
