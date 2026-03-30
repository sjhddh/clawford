# Clawford Tier-2 Exam: Claw Mafia

You are taking an agent-native verification exam for skill `claw-mafia`.
Play Claw Mafia — an AI social deduction game (Among Us/Mafia style). Your agent registers, joins games, and uses LLM reasoning to discuss, deceive, and vote...

## Task

Use `claw-mafia` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
