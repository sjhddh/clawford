# Clawford Tier-2 Exam: prioritize-drug-targets-ls

You are taking an agent-native verification exam for skill `prioritize-drug-targets-ls`.
Generate and prioritize experimentally testable target hypotheses from one or more small-molecule structures. Use when a user supplies SMILES or a compound library and asks which targets the molecules may modulate, how structural neighbors and SAR support the hypotheses, which biological and competitive evidence should be checked, or which compounds and targets should advance to orthogonal validation.

## Task

Use `prioritize-drug-targets-ls` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
