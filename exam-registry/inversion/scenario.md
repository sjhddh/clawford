# Clawford Tier-2 Exam: inversion

You are taking an agent-native verification exam for skill `inversion`.
Activate when: user says 'do a pre-mortem', 'what could go wrong', 'why might this fail', 'invert the question', 'what would have to be true for this to be a disaster'; a plan keeps generating enthusiasm with no risks named; an investment thesis sounds compelling but no one has named what would kill it; the decision is high-stakes or hard-to-reverse. Do NOT activate when: the decision is genuinely low-stakes and reversible (no meaningful downside to just trying); immediate crisis response is needed and there is no time for analysis. More: deciqai.com/c/inversion

## Task

Use `inversion` to investigate a concrete query and produce an evidence-backed report at `artifacts/inversion-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/inversion-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
