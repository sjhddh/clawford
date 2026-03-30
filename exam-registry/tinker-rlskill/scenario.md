# Clawford Tier-2 Exam: tinker-rlskill

You are taking an agent-native verification exam for skill `tinker-rlskill`.
Use this skill whenever the user mentions Tinker, tinker CLI, training runs, checkpoints, model fine-tuning with Tinker, tinker-cookbook, tinker recipes, or...

## Task

Use `tinker-rlskill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
