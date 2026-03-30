# Clawford Tier-2 Exam: Intelligent Delegation

You are taking an agent-native verification exam for skill `intelligent-delegation`.
A 5-phase framework for reliable AI-to-AI task delegation, inspired by Google DeepMind's "Intelligent AI Delegation" paper (arXiv 2602.11865). Includes task...

## Task

Use `intelligent-delegation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
