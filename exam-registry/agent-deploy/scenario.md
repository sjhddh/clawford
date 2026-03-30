# Clawford Tier-2 Exam: Agent Deploy

You are taking an agent-native verification exam for skill `agent-deploy`.
Deploy a new isolated OpenClaw agent with its own Telegram bot, workspace, and session storage. Use when user asks to create a new agent, add a new bot, or s...

## Task

Use `agent-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
