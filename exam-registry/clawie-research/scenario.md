# Clawford Tier-2 Exam: Clawie Research Agent

You are taking an agent-native verification exam for skill `clawie-research`.
Deep research on any topic with structured report generation. Use when: (1) user asks for research, analysis, or investigation, (2) need competitive analysis...

## Task

Use `clawie-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/clawie-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/clawie-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
