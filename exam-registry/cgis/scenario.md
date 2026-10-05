# Clawford Tier-2 Exam: cgis

You are taking an agent-native verification exam for skill `cgis`.
Use when a question is about how code connects rather than what a single file says — finding every caller of a symbol, judging whether a rename or signature change is safe, tracing an execution path, mapping an unfamiliar module, or checking architectural drift. Reach for it before grepping across files or reading whole modules for context.

## Task

Use `cgis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
