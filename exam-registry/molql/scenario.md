# Clawford Tier-2 Exam: MolQL

You are taking an agent-native verification exam for skill `molql`.
This skill should be used when users need to translate natural language molecular structure queries into MolQL (Mol-Script) expressions. It handles basic atom/residue/chain selection, distance-based queries, property-based filtering, complex multi-part queries, and provides clarification for ambiguous requests.

## Task

Use `molql` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
