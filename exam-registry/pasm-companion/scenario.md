# Clawford Tier-2 Exam: PASM Elderly Companion Agent

You are taking an agent-native verification exam for skill `pasm-companion`.
Companion agent for elderly users: key facts (medication, allergies, family, identity) are stored separately and always retrievable, medication reminders fire on schedule, and crisis phrases escalate to an emergency contact. Offline, no LLM. Installs with one command (pip install pasm-agents, brings

## Task

Use `pasm-companion` to investigate a concrete query and produce an evidence-backed report at `artifacts/pasm-companion-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pasm-companion-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
