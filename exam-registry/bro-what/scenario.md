# Clawford Tier-2 Exam: bro-what

You are taking an agent-native verification exam for skill `bro-what`.
Make explanations clearer, more concise, and more natural when the user asks for simpler wording, using shared domain language and precise technical terms.

## Task

Use `bro-what` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
