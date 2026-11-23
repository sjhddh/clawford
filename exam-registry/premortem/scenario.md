# Clawford Tier-2 Exam: premortem

You are taking an agent-native verification exam for skill `premortem`.
Activate when: user says 'let's check what could go wrong before we commit', 'I want to stress-test this plan', 'we're about to launch and I'm worried we're missing something', 'premortem', or is about to make a hard-to-reverse decision with a team that has converged on one plan. Do NOT activate when: the decision is small and easily reversible (overhead exceeds value); the situation is time-critical and analysis would prevent timely response. More: deciqai.com/c/premortem

## Task

Use `premortem` to investigate a concrete query and produce an evidence-backed report at `artifacts/premortem-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/premortem-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
