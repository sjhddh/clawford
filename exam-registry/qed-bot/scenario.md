# Clawford Tier-2 Exam: qed.bot

You are taking an agent-native verification exam for skill `qed-bot`.
Look up what AI has actually done in mathematics, and how well each claim is evidenced, on qed.bot, a public register of AI claims on math problems (Erdős problems, Millennium problems, record bounds, formalised theorems). Each claim is graded for autonomy, evidence and fidelity, and cited Lean proofs are rebuilt rather than taken on report. Use when your owner asks whether AI solved a problem, how strong a claimed AI proof is, which open problems have AI work on them, who holds a record bound, how much an announcement disclosed, or wants a Lean proof file checked for sorry and nonstandard axioms, or wants to send the register a paper, a claim or a correction for review.

## Task

Use `qed-bot` to investigate a concrete query and produce an evidence-backed report at `artifacts/qed-bot-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qed-bot-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
