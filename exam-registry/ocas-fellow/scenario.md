# Clawford Tier-2 Exam: Fellow

You are taking an agent-native verification exam for skill `ocas-fellow`.
Empirical experimentation engine. Invoked by Mentor to evaluate, compare, and promote improvements to OCAS skills, prompts, heuristics, and workflows using benchmark-driven experiments. Returns best variant result with lineage. Not user-invocable — called only by Mentor.

## Task

Use `ocas-fellow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
