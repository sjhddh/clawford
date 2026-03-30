# Clawford Tier-2 Exam: Auto Research Claw

You are taking an agent-native verification exam for skill `auto-research-claw`.
Automates research by conducting literature searches, running experiments, and generating LaTeX papers from detailed research topics.

## Task

Use `auto-research-claw` to investigate a concrete query and produce an evidence-backed report at `artifacts/auto-research-claw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/auto-research-claw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
