# Clawford Tier-2 Exam: davinci-mode

You are taking an agent-native verification exam for skill `davinci-mode`.
Explore a design or strategy decision through distinct straightforward, hybrid and creative approaches, with concrete tradeoffs and a reasoned recommendation. Use when the user wants options before choosing, not after they have already decided.

## Task

Use `davinci-mode` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
