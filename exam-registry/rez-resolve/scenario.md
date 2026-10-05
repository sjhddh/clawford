# Clawford Tier-2 Exam: rez-resolve

You are taking an agent-native verification exam for skill `rez-resolve`.
Rez resolve and solver internals — how the solver works, reading -v debug output, conflicts, cycles and total reductions, graph inspection, patching, caching and timestamps. Use when the user asks how the solver works or how to read its -v output. For a resolve that already failed and needs attributing, use rez-resolve-troubleshooting. Covers Rez 3.4.0.

## Task

Use `rez-resolve` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
