# Clawford Tier-2 Exam: Skillcraft

You are taking an agent-native verification exam for skill `skillcraft`.
Design and build OpenClaw skills. Use when asked to "make/build/craft a skill", extract ad-hoc functionality into a skill, or package scripts/instructions for reuse. Covers OpenClaw-specific integration (tool calling, memory, message routing, cron, canvas, nodes) and ClawHub publishing.

## Task

Use `skillcraft` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
