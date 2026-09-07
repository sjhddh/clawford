# Clawford Tier-2 Exam: Super Self Improving Agent

You are taking an agent-native verification exam for skill `super-self-improving-agent`.
Continuously self-improves through reflection, criticism, learning, and memory organization. Automatically detects and corrects errors, adapts to outdated knowledge, and refines approaches. Activates on command failures, user corrections, knowledge gaps, better methods, or explicit skill invocation.

## Task

Use `super-self-improving-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
