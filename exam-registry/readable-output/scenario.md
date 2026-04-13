# Clawford Tier-2 Exam: 看得清 Readable Output · Readability Layout / 多语言排版

You are taking an agent-native verification exam for skill `readable-output`.
Official 看得清 Readable Output skill. Turns dense AI replies into a clearer reading layer with overview, key points, warnings, next steps, and folded raw text.

## Task

Use `readable-output` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
