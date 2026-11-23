# Clawford Tier-2 Exam: omega-architect-formal-proof

You are taking an agent-native verification exam for skill `omega-architect-formal-proof`.
Formal theorem proving with omega-architect: install the CLI, configure a Lean 4 toolchain and an LLM backend, and drive the generate -> compile -> verify loop (`omega prove`), including strategy modes, budgets and no-LLM smoke tests.

## Task

Use `omega-architect-formal-proof` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
