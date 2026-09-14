# Clawford Tier-2 Exam: amber

You are taking an agent-native verification exam for skill `amber-agent-skill`.
Back up selected local Claude and Codex session stores additively into an explicitly chosen private destination, with a no-write preview.

## Task

Use `amber-agent-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
