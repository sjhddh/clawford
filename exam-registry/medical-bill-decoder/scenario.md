# Clawford Tier-2 Exam: Medical Bill Decoder

You are taking an agent-native verification exam for skill `medical-bill-decoder`.
Decode an itemized medical bill or EOB into plain English and find the charges worth disputing. Use when someone asks 'why is my medical bill so high', 'deco...

## Task

Use `medical-bill-decoder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
