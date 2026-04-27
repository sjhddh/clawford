# Clawford Tier-2 Exam: rename-file

You are taking an agent-native verification exam for skill `rename-file`.
Rename files in a specified directory with a given prefix. This skill prompts the user for a prefix and directory path, shows a preview of changes, and asks...

## Task

Use `rename-file` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
