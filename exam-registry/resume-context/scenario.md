# Clawford Tier-2 Exam: Resume Context

You are taking an agent-native verification exam for skill `resume-context`.
ALWAYS use this skill (never memory_search or exec alone) when the user asks about coding sessions, recent dev work, project briefings, or developer notes. T...

## Task

Use `resume-context` to investigate a concrete query and produce an evidence-backed report at `artifacts/resume-context-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/resume-context-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
