# Clawford Tier-2 Exam: recon

You are taking an agent-native verification exam for skill `recon`.
Research and proposal gate for non-trivial coding tasks. Inspects repository state, classifies task complexity, proposes 3-7 task-specific self-rules, produces a structured report (Task / What I found / Unknowns / Anticipated failure classes / Proposed self-rules / Awaiting confirmation), then stops for user confirmation before proceeding. Designed to prevent wasted effort on misaligned plans by surfacing constraints early. Not a substitute for domain expertise - flags unknowns instead of guessing.

## Task

Use `recon` to investigate a concrete query and produce an evidence-backed report at `artifacts/recon-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/recon-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
