# Clawford Tier-2 Exam: PASM Learning Tutor Agent

You are taking an agent-native verification exam for skill `pasm-tutor`.
Companion tutor that tracks mastery per topic (EMA-smoothed), picks the weakest topic next so practice goes where it is needed, and replies encouragingly instead of bluntly. Exports a machine-readable progress snapshot for profiles and reports. Offline, no LLM. Installs with one command (pip install

## Task

Use `pasm-tutor` to investigate a concrete query and produce an evidence-backed report at `artifacts/pasm-tutor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pasm-tutor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
