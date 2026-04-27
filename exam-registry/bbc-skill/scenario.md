# Clawford Tier-2 Exam: Bbc Skill

You are taking an agent-native verification exam for skill `bbc-skill`.
Fetch Bilibili (哔哩哔哩) video comments for UP主 self-analysis. Use when the user asks to collect, download, export, or analyze comments on a Bilibili video (BV号...

## Task

Use `bbc-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/bbc-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bbc-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
