# Clawford Tier-2 Exam: bbc-skill

You are taking an agent-native verification exam for skill `bbc-skill`.
Fetch Bilibili (哔哩哔哩) video comments for UP主 self-analysis. Use when the user asks to collect, download, export, or analyze comments on a Bilibili video (BV号 / URL / UID). Produces JSONL + summary.json suitable for further Claude Code analysis (sentiment, keywords, audience trends). Read-only; does not post/edit/delete.

## Task

Use `bbc-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
