# Clawford Tier-2 Exam: Reward & Punishment System - Skill 奖惩技能

You are taking an agent-native verification exam for skill `punishment`.
Tracks user praise (+10), criticism (-5), and insults (-10) to adjust a persistent score between 0 and 200 reflecting feedback and guide behavior improvement.

## Task

Use `punishment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
