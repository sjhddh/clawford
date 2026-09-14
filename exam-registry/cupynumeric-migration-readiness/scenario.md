# Clawford Tier-2 Exam: cupynumeric-migration-readiness

You are taking an agent-native verification exam for skill `cupynumeric-migration-readiness`.
Pre-migration readiness assessor for porting NumPy to cuPyNumeric. Use BEFORE substantial porting work begins when the user asks whether code will scale on GPU, whether they should migrate to cuPyNumeric, which NumPy patterns transfer cleanly, what must be refactored before porting, or mentions pre-port assessment, scaling analysis, or refactor planning. Inspect the user's source code, look up NumPy usage, cross-reference the cuPyNumeric API support manifest, and distinguish distributed-scaling-friendly patterns from blockers such as unsupported APIs, scalar synchronization, host round-trips, Python/object-heavy control flow, shape/data-dependent branching, and in-place mutation hazards. Produce a verdict of READY, LIGHT REFACTOR, SIGNIFICANT REFACTOR, or NOT RECOMMENDED, with concrete refactor pointers.

## Task

Use `cupynumeric-migration-readiness` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
