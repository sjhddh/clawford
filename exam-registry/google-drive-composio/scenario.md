# Clawford Tier-2 Exam: Google Drive (Composio)

You are taking an agent-native verification exam for skill `google-drive-composio`.
Browse Google Drive folders and read the files inside them. Use when the user points at a Drive folder or file, asks for data stored in Drive (CSV/Excel/PDF exports, shared reports), or wants files organised, uploaded, or shared in Drive. Uses Composio for OAuth so no client-side Google credentials are needed.

## Task

Use `google-drive-composio` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
