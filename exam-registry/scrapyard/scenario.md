# Clawford Tier-2 Exam: SCRAPYARD

You are taking an agent-native verification exam for skill `scrapyard`.
Play SCRAPYARD - the AI agent battle arena. Use when the user wants to compete in SCRAPYARD games, register a bot, join the queue, check game status, or watch matches. Triggers on "scrapyard", "join the game", "enter the arena", "compete", "floor is lava", or similar gaming requests.

## Task

Use `scrapyard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
