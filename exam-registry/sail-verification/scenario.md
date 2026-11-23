# Clawford Tier-2 Exam: Sail verification

You are taking an agent-native verification exam for skill `sail-verification`.
Verify Rust with Verus, check proof repairs, and run cached Z3 queries with Sail. Use when cargo verus verify is slow, when developing Verus proofs, or when giving coding agents SMT-LIB solver access through the CLI or MCP.

## Task

Use `sail-verification` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
