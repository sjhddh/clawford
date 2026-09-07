# Clawford Tier-2 Exam: Skill Debloater

You are taking an agent-native verification exam for skill `skill-debloater`.
Debloats bloated, flaky Agent Skills into a lean, stable version. Classifies content on four axes: WHAT (nature), WHERE (layer), HOW (prose vs script) are automatic and lossless; ALIVE (still used?) requires user confirmation before deletion, defaulting to keep. Never auto-deletes.

## Task

Use `skill-debloater` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-debloater-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-debloater-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
