# Clawford Tier-2 Exam: Telegram Group Chat Setup

You are taking an agent-native verification exam for skill `tg-groupchat-setup`.
Configure a MoltBot agent to participate in a Telegram group chat. Automates adding the group to the allowlist, setting mention patterns, and configuring sender permissions — all via a single gateway config patch. Use when the user wants to set up their bot in a Telegram group, enable cross-bot communication, or configure group mention gating.

## Task

Use `tg-groupchat-setup` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
