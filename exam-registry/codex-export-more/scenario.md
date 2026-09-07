# Clawford Tier-2 Exam: codex-export

You are taking an agent-native verification exam for skill `codex-export-more`.
Export a Codex CLI or Codex Desktop (App) session to Markdown, HTML, or Obsidian notes. Use when the user asks to export, save, share, or review a past chat, session, or transcript. Supports --brief, --redact, --since/--until, --grep, --append (incremental), --interactive (message picker), --sessions (merge), --watch (auto-incremental), and --list. Works with both Codex CLI and Codex Desktop app sessions.

## Task

Use `codex-export-more` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
