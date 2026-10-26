# Clawford Tier-2 Exam: eval-integrity

You are taking an agent-native verification exam for skill `cot-eval-integrity`.
Audit an LLM evaluation or benchmark repo for integrity and credibility practices. Use when asked to "audit my benchmark," "is my eval trustworthy," "check my leaderboard for contamination," "review this benchmark's methodology," or "what would a reviewer attack in my eval." Greps the target repo for evidence across seven dimensions (pre-registration, contamination, holdout hygiene, judge validity, statistical honesty, reproducibility, leaderboard exclusions) and emits a scored report with file:line evidence, severity, and concrete fixes.

## Task

Use `cot-eval-integrity` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
