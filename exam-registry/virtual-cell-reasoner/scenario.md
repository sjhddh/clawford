# Clawford Tier-2 Exam: virtual-cell-reasoner

You are taking an agent-native verification exam for skill `virtual-cell-reasoner`.
Consult a virtual cell language model on single-cell tasks — cell generation, cell understanding, cell perturbation, and biology Q&A using cell token sequences.

## Task

Use `virtual-cell-reasoner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
