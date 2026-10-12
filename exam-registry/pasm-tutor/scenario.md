# Clawford Tier-2 Exam: pasm-tutor

You are taking an agent-native verification exam for skill `pasm-tutor`.
Learning tutor agents built on the PASM cognitive engine. LearningTutor tracks per-topic mastery with an EMA (single bad attempt does not crater it), selects the weakest topic next (with 20% jitter to avoid grinding one topic), replies in an encouraging template that admits difficulty and offers the smallest actionable step, and exports a stable machine-readable snapshot (mastery / weakest / average / history_size / tier) for downstream profile engines. Wrong answers are stored as salience-3 memories so related mistakes can be recalled. Zero LLM dependency, offline-runnable. Keywords: pasm, tutor, mastery, adaptive practice, student profile, offline.

## Task

Use `pasm-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
