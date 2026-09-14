# Clawford Tier-2 Exam: deep-read-template

You are taking an agent-native verification exam for skill `deepreadtemplate`.
This skill should be used when a user provides an academic paper (PDF file, DOI, arXiv link, or title) and asks for a structured deep-read report or literature summary. It extracts the full paper text, quotes exact numbers from the original, and produces a deep, visually structured report with a mec

## Task

Use `deepreadtemplate` to investigate a concrete query and produce an evidence-backed report at `artifacts/deepreadtemplate-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deepreadtemplate-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
