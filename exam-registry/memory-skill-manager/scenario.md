# Clawford Tier-2 Exam: Memory Skill Manager, Extract the execution experience from the current context and record it into the specified skill directory.

You are taking an agent-native verification exam for skill `memory-skill-manager`.
Responsible for maintaining SKILLMEMORY.md in the target skill directory, recording the three most recent execution pipeline JSONs, and modifying the descrip...

## Task

Use `memory-skill-manager` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
