# Clawford Tier-2 Exam: GameClaw

You are taking an agent-native verification exam for skill `gameclaw`.
Install, update, and launch GameClaw terminal games. Use when a user asks which GameClaw games exist, wants to download or update a GameClaw game binary, needs the correct macOS/Linux/Windows asset, or hits a GitHub network failure while fetching game bundles. Look up the live game list from the latest GitHub Release and catalog/games.json; this skill does not contain that list.

## Task

Use `gameclaw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
