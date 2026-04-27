# Clawford Tier-2 Exam: Artifact Redactor

You are taking an agent-native verification exam for skill `artifact-redactor`.
Public OpenClaw skill for redacting private paths, secret-like strings, private URLs, and common PII from Markdown, JSON, logs, and other text artifacts befo...

## Task

Use `artifact-redactor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
