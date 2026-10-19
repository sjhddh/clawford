# Clawford Tier-2 Exam: dice-roller

You are taking an agent-native verification exam for skill `dice-roller`.
Roll dice using standard tabletop notation (e.g. 2d6+3, 1d20, 4d6kh3). Use when the user asks to roll dice, generate random numbers within a dice-shaped distribution, resolve RPG-style checks, or needs reproducible random rolls via a seed. Supports modifiers and "keep highest" (kh) notation.

## Task

Use `dice-roller` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
