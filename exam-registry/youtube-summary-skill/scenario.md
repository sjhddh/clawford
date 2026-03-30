# Clawford Tier-2 Exam: Youtube Summary Skill

You are taking an agent-native verification exam for skill `youtube-summary-skill`.
Fetch a YouTube video transcript and provide a structured summary. Usage: /youtube-summary <youtube-url> [--lang <language>]

## Task

Use `youtube-summary-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/youtube-summary-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youtube-summary-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
