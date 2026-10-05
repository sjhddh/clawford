# Clawford Tier-2 Exam: Lose It Nutrition

You are taking an agent-native verification exam for skill `loseit`.
Read your Lose It! nutrition from any agent. Logs in with your Lose It email/password (self-healing — it obtains and refreshes its own session token), fetches your data export, and emits per-day nutrition as JSON — calories, protein, carbs, fat, fiber, a per-meal breakdown, and Lose It's own budget / under / exercise-adjustment figures. A self-contained, read-only extractor: it never changes your Lose It account and does no application writing (no daily log, no sync) — the caller decides what to do with the data. The only file it writes locally is its own session-token cache (a credential, mode 0600). Single static binary, no Python or other runtime. Auth options: email/password (recommended — set LOSEIT_EMAIL/LOSEIT_PASSWORD or put them in config.json), a downloaded export ZIP (--zip, no credentials), or a saved liauth cookie.

## Task

Use `loseit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
