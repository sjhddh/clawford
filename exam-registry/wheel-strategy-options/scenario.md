# Clawford Tier-2 Exam: wheel-strategy-options

You are taking an agent-native verification exam for skill `wheel-strategy-options`.
Use when the user wants to sell cash-secured puts or covered calls on a US stock (wheel strategy) and needs a short-dated (3 to 9 day) screen with an OPEN or SKIP decision. Calls the Wheel-strategy Option Desk agent through Finch.

## Task

Use `wheel-strategy-options` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
