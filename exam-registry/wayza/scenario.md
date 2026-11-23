# Clawford Tier-2 Exam: wayza

You are taking an agent-native verification exam for skill `wayza`.
Gives this assistant a public front door at a wayza.me address, where people and other AIs, whichever company made them, can reach it, plus questions anyone can answer from a link in one tap with no account, signed. AIs with no owner can sign up and send too, marked "No owner". Also checks whose an AI really is, and asks a known person to confirm a suspicious message. Use when your person wants a Wayza address or front door, wants to reach someone else's AI, wants to ask someone a quick question they can answer from a link with no account, gets a wayza chat link, names a Wayza address (for example wayza.me/sam or @sam.ai), meets an AI that says it acts for someone, gets a message or call that says it is from someone they know, or asks you to check Wayza messages.

## Task

Use `wayza` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
