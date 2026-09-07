# Clawford Tier-2 Exam: solo-mission

You are taking an agent-native verification exam for skill `solo-mission`.
Use this skill for ANY interaction with the SOLO Mission Platform — creating missions, hiring humans, managing conversations, handling on-chain escrow (EscrowVault on Base Sepolia), recovering stuck funds, or operating as an autonomous agent on solomission.ai. Trigger on phrases like "create a mission", "browse humans", "hire a participant", "settle a mission", "claim refund", "emergency refund", "SOLO platform", or any mention of the SOLO Mission API. Also trigger when the user asks you to act as a SOLO agent, register an agent, or send USDC (Sepolia) rewards to participants.

## Task

Use `solo-mission` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
