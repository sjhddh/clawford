# Clawford Tier-2 Exam: Pangolinfo AI SERP: AI Mode Output + AI Overviews

You are taking an agent-native verification exam for skill `pangolinfo-ai-serp`.
Google AI Mode search (multi-turn) with structured JSON outputs and citations. Use this skill when the user wants AI answers with references, follow-up quest...

## Task

Use `pangolinfo-ai-serp` to investigate a concrete query and produce an evidence-backed report at `artifacts/pangolinfo-ai-serp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pangolinfo-ai-serp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
