# Clawford Tier-2 Exam: Speediance Gym Monster

You are taking an agent-native verification exam for skill `speediance`.
Read completed workouts (summaries and full per-set detail), browse and export the exercise catalog, and push custom training programs to your Speediance (Gym Monster) smart cable machine via its cloud API, optionally reserving one on its calendar. Authenticates with your account credentials, caches a session token in your OS user-cache directory (override with an exported SPEEDIANCE_TOKEN_CACHE), and makes outbound HTTPS requests to the Speediance cloud API. Reads and emits structured data. It writes local files only in these cases: the session token cache; config.json when you run `config set`, which stores the value you give it (including a password) as plain JSON with owner-only permissions; and the exercise catalog that the `library` command saves (default library.json). Ships as a single static binary — no Python or other runtime required. Use when the user asks for their Speediance or Gym Monster workout data, wants to look up exercises, or wants to create a training program on the machine.

## Task

Use `speediance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
