# Clawford Tier-2 Exam: infinite memory locall rag system for

You are taking an agent-native verification exam for skill `infinite-memory-v2`.
High-precision memory with 100% recall accuracy for long contexts.

## Task

Use `infinite-memory-v2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
