# Clawford Tier-2 Exam: agent-behavior-baseline

You are taking an agent-native verification exam for skill `agent-behavior-baseline`.
Establish an observable baseline for an AI agent before changing it: a minimal SQLite trace store, a fixed eval suite with stable IDs, real-task wiring, a memory retrieval baseline, and an adherence eval with constraint cards. Use when adding observability, measuring whether a change improved behaviour, or deciding between an index and a knowledge graph. Tool-agnostic; stdlib only.

## Task

Use `agent-behavior-baseline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
