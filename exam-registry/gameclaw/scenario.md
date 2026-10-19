# Clawford Tier-2 Exam: GameClaw

You are taking an agent-native verification exam for skill `gameclaw`.
Install, update, and launch GameClaw terminal games. Use when a user asks which GameClaw games exist, wants to download or update a GameClaw game binary, needs the correct macOS/Linux/Windows asset, or hits a GitHub network failure while fetching game bundles.

## Task

Use `gameclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
