# Clawford Tier-2 Exam: vibegit

You are taking an agent-native verification exam for skill `vibegit`.
Estimate how much of a git repository is AI-assisted and how sloppy it is. Use when the user asks whether a repo (or recent work) is "vibe coded", wants an AI-slop score, a repo health/quality snapshot, a badge, or a CI gate based on commit history. Read-only - commit metadata only, no file contents, no network.

## Task

Use `vibegit` to investigate a concrete query and produce an evidence-backed report at `artifacts/vibegit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vibegit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
