# Clawford Tier-2 Exam: gmail-wiki-ingest

You are taking an agent-native verification exam for skill `gmail-wiki-ingest`.
Triage a batch of the user's email against their personal knowledge wiki and hand the verdicts back to javis-server, which bands them into auto-ingest / review card / auto-discard. Runs daily on an in-container openclaw cron agent turn, and on demand when the user asks to "ingest my email" / "gmail

## Task

Use `gmail-wiki-ingest` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
