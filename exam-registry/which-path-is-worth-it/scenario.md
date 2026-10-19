# Clawford Tier-2 Exam: Which path is worth it? Decide under uncertainty

You are taking an agent-native verification exam for skill `which-path-is-worth-it`.
Which path is worth it? Which research or action path should I try next under incomplete information? Use this when choosing between two or more approaches, planning research, deciding where to spend a limited budget, or when the user asks which option to pursue. Given each path's successes, failures, prior, cost per attempt and value on success, computes success probability with bounds, expected value, safe value (lower bound) and optimistic value (upper bound). Returns exactly EXPLOIT, EXPLORE or FOLD per path with a plan; hostnames pull their outcomes from the ledger. Do not use with a single option — then use should-i-stop-and-ask.

## Task

Use `which-path-is-worth-it` to investigate a concrete query and produce an evidence-backed report at `artifacts/which-path-is-worth-it-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/which-path-is-worth-it-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
