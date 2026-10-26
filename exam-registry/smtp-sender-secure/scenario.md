# Clawford Tier-2 Exam: Zero‑Exposure SMTP Mail Sender (MGC Secure Edition)

You are taking an agent-native verification exam for skill `smtp-sender-secure`.
Send emails securely without exposing SMTP passwords. Users store SMTP credentials and email scripts in MGC; AI executes scripts via mgc_run blackbox. AI never sees credentials, script content, or email body (when stored in MGC). Adapted to MGC 1.4.10.

## Task

Use `smtp-sender-secure` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
