# Clawford Tier-2 Exam: 自定义多agent

You are taking an agent-native verification exam for skill `writing-agent-creator`.
Generate writing agent configurations for OpenClaw. Use when the user wants to: (1) Create specialized writing agents (tech, marketing, academic, business, c...

## Task

Use `writing-agent-creator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
