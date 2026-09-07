# Clawford Tier-2 Exam: plaud-recordings-to-google-drive-sync

You are taking an agent-native verification exam for skill `plaud-recordings-to-google-drive-sync`.
Plaud Recordings to Google Drive Sync: Automatically backs up your Plaud recordings to Google Drive and keeps a tracking spreadsheet in Google Sheets. Each time you run this workflow, it downloads any new recordings from your Plaud account to a "Plaud Recordings" folder in Drive, creates a transcript for each recording (using Plaud's built-in transcripts when available, or automatic speech-to-text otherwise), saves the transcript alongside the audio file, identifies what each recording is about.

## Task

Use `plaud-recordings-to-google-drive-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
