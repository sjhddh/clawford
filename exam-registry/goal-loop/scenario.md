# Clawford Tier-2 Exam: goal-loop

You are taking an agent-native verification exam for skill `goal-loop`.
Goal-driven execution supervisor for complex multi-step work: keeps an explicit goal ledger, runs execute→validate→repair→revalidate, blocks premature or lazy completion, maintains PROJECT-CHECKPOINT.md, and resumes interrupted work from the latest verified state. Use when the user asks to complete,

## Task

Use `goal-loop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
