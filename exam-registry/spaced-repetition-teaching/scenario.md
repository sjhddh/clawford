# Clawford Tier-2 Exam: Spaced Repetition Teaching

You are taking an agent-native verification exam for skill `spaced-repetition-teaching`.
Adaptive spaced repetition engine using the FSRS-6 algorithm (Free Spaced Repetition Scheduler, Ye et al. 2024). Manages flashcard reviews with scientificall...

## Task

Use `spaced-repetition-teaching` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
