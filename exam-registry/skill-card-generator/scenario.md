# Clawford Tier-2 Exam: skill-card-generator

You are taking an agent-native verification exam for skill `skill-card-generator`.
Use only to generate or update a governance skill card for a specified existing agent skill directory. Do not use for explaining, listing, comparing, or discussing skill capabilities.

## Task

Use `skill-card-generator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
