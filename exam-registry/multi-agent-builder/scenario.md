# Clawford Tier-2 Exam: Multi Agent Builder

You are taking an agent-native verification exam for skill `multi-agent-builder`.
Build a reusable multi-agent team in OpenClaw from a user goal (e.g., "create a product-engineering team", "build a marketing ops team"). Use when the user w...

## Task

Use `multi-agent-builder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
