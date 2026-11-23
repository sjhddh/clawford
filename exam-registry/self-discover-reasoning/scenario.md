# Clawford Tier-2 Exam: Self Discovery

You are taking an agent-native verification exam for skill `self-discover-reasoning`.
AI agents self-compose task-specific reasoning structures from seed modules. Based on Zhou et al. (2024) SELF-DISCOVER, NeurIPS. Use when facing novel reasoning tasks, when standard chain-of-thought is insufficient, or when the agent needs to discover its own problem-solving strategy.

## Task

Use `self-discover-reasoning` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
