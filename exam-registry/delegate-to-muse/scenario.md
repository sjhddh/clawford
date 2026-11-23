# Clawford Tier-2 Exam: Muse Skill

You are taking an agent-native verification exam for skill `delegate-to-muse`.
Use when the user explicitly asks for repository work to be handed to Muse: "delegate this to muse", "have muse do it", or the slash command. Covers workspace trust, writing the handoff, running `muse exec`, reviewing the diff that comes back, and committing it. Never reach for it unasked: work you could do directly, do directly. Not for use from inside Muse unless the user asks for nested delegation.

## Task

Use `delegate-to-muse` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
