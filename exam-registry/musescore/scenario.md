# Clawford Tier-2 Exam: musescore

You are taking an agent-native verification exam for skill `musescore`.
Search MuseScore sheet music and read score metadata via MCP. Triggers on phrases like "find sheet music for", "search MuseScore for", "is there a free arrangement of", "what's the license on this MuseScore score", "how many pages is", or any request involving MuseScore scores, arrangements, or sheet-music metadata. Requires musescore-mcp installed and the fetchproxy extension active with a signed-in musescore.com tab (see Setup).

## Task

Use `musescore` to investigate a concrete query and produce an evidence-backed report at `artifacts/musescore-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/musescore-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
