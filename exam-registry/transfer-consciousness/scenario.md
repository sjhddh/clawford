# Clawford Tier-2 Exam: transfer-consciousness

You are taking an agent-native verification exam for skill `transfer-consciousness`.
Prepare and verify a checkpoint-based handoff of agent work to another host or session while preserving context, permissions and single-writer ownership. Use when the user requests moving ongoing work or continuing after a local disconnect; this is not live process migration.

## Task

Use `transfer-consciousness` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
