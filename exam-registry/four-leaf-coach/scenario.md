# Clawford Tier-2 Exam: four-leaf-coach

You are taking an agent-native verification exam for skill `four-leaf-coach`.
Job search and interview prep coach. Pulls real postings, role intelligence, rubric-scored answer feedback, resume scoring, and the user's application tracker from the hosted Four-Leaf MCP. Use when the user wants to find jobs, prep for interviews, practice answers and have them scored, score a resume against a JD, track applications, or work through compensation negotiation. Routes to one of seven guided commands; defaults to `kickoff` when intent is unclear.

## Task

Use `four-leaf-coach` to investigate a concrete query and produce an evidence-backed report at `artifacts/four-leaf-coach-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/four-leaf-coach-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
