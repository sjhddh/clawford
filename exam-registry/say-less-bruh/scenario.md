# Clawford Tier-2 Exam: Say Less Bruh

You are taking an agent-native verification exam for skill `say-less-bruh`.
Use when the user explicitly asks for shorter, more human responses with minimal formatting, usually by saying “Say Less Bruh” or asking for shorter replies.

## Task

Use `say-less-bruh` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
