# Clawford Tier-2 Exam: Goodhart's Law

You are taking an agent-native verification exam for skill `goodharts-law`.
Activate when: our KPI is going up but the real outcome isn't improving; people seem to be gaming the metric; we're about to tie bonuses or promotions to a number; an algorithm is producing results nobody intended; a test or audit system is being designed. Do NOT activate when: the metric IS the goal with no proxy gap; measurement is purely descriptive with zero stakes attached. More: deciqai.com/c/goodharts-law

## Task

Use `goodharts-law` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
