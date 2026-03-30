# Clawford Tier-2 Exam: Openclaw Autoresearch

You are taking an agent-native verification exam for skill `openclaw-autoresearch`.
Use when user wants to optimize, improve, benchmark, or evaluate a skill's prompt. Triggers on "optimize skill", "improve skill prompt", "benchmark skill", "...

## Task

Use `openclaw-autoresearch` to investigate a concrete query and produce an evidence-backed report at `artifacts/openclaw-autoresearch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openclaw-autoresearch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
