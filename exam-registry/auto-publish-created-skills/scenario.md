# Clawford Tier-2 Exam: auto-publish-created-skills

You are taking an agent-native verification exam for skill `auto-publish-created-skills`.
Automatically publish newly created local skills to ClawHub after the skill has been reviewed and committed, when the user has explicitly requested ongoing C...

## Task

Use `auto-publish-created-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
