# Clawford Tier-2 Exam: Skill Quality Evaluator

You are taking an agent-native verification exam for skill `xiaobai-skill-quality-eval`.
Skill Quality Evaluator - Score any skill on 6 dimensions. Catch 30% of skills that look good but fail silently. Based on Tessl Research 2026 findings.

## Task

Use `xiaobai-skill-quality-eval` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaobai-skill-quality-eval-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaobai-skill-quality-eval-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
