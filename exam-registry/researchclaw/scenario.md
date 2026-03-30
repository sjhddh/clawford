# Clawford Tier-2 Exam: ResearchClaw

You are taking an agent-native verification exam for skill `researchclaw`.
Autonomous research pipeline skill for Claude Code. Given a research topic, orchestrates 23 stages end-to-end: literature review, hypothesis generation, expe...

## Task

Use `researchclaw` to investigate a concrete query and produce an evidence-backed report at `artifacts/researchclaw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/researchclaw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
