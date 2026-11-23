# Clawford Tier-2 Exam: supplement-stack-checker

You are taking an agent-native verification exam for skill `supplement-stack-checker`.
Use when someone is taking multiple supplements/vitamins together, planning a new stack, or worried about interactions — checks 60+ ingredients for pair interactions (calcium-iron blocking, zinc-copper depletion, St. John's Wort drug clearing, vitamin K-warfarin), harmful dose flags vs ULs, redundant overlap (5 forms of the same thing), and builds a timed daily schedule that separates conflicting minerals by 2+ hours.

## Task

Use `supplement-stack-checker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
