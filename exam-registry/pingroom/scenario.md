# Clawford Tier-2 Exam: PingRoom

You are taking an agent-native verification exam for skill `pingroom`.
Reach a human through PingRoom from an OpenClaw agent using the `pingroom` CLI — send a ping to their phone (with files up to 5 MiB, tappable links, map locations, or an acknowledgement request), ask a question and block until they answer, gate an action on approve/deny, hand a decision to your authorizing human, drive a lock-screen live-progress card, and stream incoming pings. Use it whenever the task means "notify me", "let me know when it's done", "ask me before deploying", "send this to my phone", "ping the team", or any step that needs a real human decision rather than a guess. Pairing works without a terminal: `pingroom pair --agent-label "OpenClaw"` creates a separate robot profile and prints its claim link. Privacy: everything you pass — message text, attachments, links, and locations — is sent to the PingRoom service and delivered to the paired human's phone, so send only what the user has agreed to share off-platform, and ask first when the request is ambiguous. Also use it when the human asks to redeem a PingRoom gift or promotional code.

## Task

Use `pingroom` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
