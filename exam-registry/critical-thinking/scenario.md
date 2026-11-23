# Clawford Tier-2 Exam: critical-thinking

You are taking an agent-native verification exam for skill `critical-thinking`.
Activate when: user says 'challenge my thinking', 'play devil's advocate', 'what's the strongest counter-argument', 'ACH', 'analysis of competing hypotheses'; user needs to evaluate a high-stakes claim or decision with multiple possible interpretations; user suspects motivated reasoning or a team is converging too fast on one answer. Do NOT activate when: the claim is trivial or already well-validated; the decision is about values rather than facts (use regret-minimization or first-principles instead). More: deciqai.com/c/critical-thinking

## Task

Use `critical-thinking` to investigate a concrete query and produce an evidence-backed report at `artifacts/critical-thinking-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/critical-thinking-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
