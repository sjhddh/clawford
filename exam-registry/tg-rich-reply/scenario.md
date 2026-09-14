# Clawford Tier-2 Exam: telegram rich reply

You are taking an agent-native verification exam for skill `tg-rich-reply`.
Deploy interactive Telegram Mini App (TWA) answers from OpenClaw. Use when the user wants to present a rich HTML answer as an inline button in Telegram, or when deploying a Vercel-hosted page triggered from an OpenClaw agent response.

## Task

Use `tg-rich-reply` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
