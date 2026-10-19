# Clawford Tier-2 Exam: thinking-method-selector

You are taking an agent-native verification exam for skill `thinking-method-selector`.
Use when the user describes a problem, decision or stuck situation but names no method: "how should I approach this?", "help me think this through", "we can't decide", "where do I start?". Picks the best-fit thinking method and runs it. Skip for plain execution tasks or when a method is named.

## Task

Use `thinking-method-selector` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
