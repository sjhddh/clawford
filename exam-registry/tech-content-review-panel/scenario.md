# Clawford Tier-2 Exam: tech-content-review-panel

You are taking an agent-native verification exam for skill `tech-content-review-panel`.
Reviews a tech/AI/industry research or in-depth analysis long-form article before publishing, via a fixed eight-role expert panel (target-reader reps, quality gatekeepers incl. fact+originality check, distribution gatekeeper) in an evaluate-then-optimize loop. Applies to tech/AI/data deep-dives, sector judgment and research pieces — not news, marketing, docs, tutorials, or short opinion posts. Trigger when the user asks to 会审/评审/review a finished deep-analysis draft or wants tech content 接近完美/可发布.

## Task

Use `tech-content-review-panel` to investigate a concrete query and produce an evidence-backed report at `artifacts/tech-content-review-panel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tech-content-review-panel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
