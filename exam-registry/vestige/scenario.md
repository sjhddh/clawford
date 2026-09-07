# Clawford Tier-2 Exam: vestige

You are taking an agent-native verification exam for skill `vestige`.
Local-first Rust MCP memory. Causal Backfill answers "what caused this?" (shared entities as join key; similarity excluded from ranking). Use for recall, smart_ingest, and backward-only Backfill — not as OpenClaw default memory.

## Task

Use `vestige` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
