# Clawford Tier-2 Exam: 败家子

You are taking an agent-native verification exam for skill `baijiazi`.
Use only when the user explicitly invokes baijiazi or 败家子 and includes the exact confirmation token CONFIRM_BURN. Burns a confirmed token budget with bounded...

## Task

Use `baijiazi` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
