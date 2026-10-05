# Clawford Tier-2 Exam: space-duck-kimi-relay

You are taking an agent-native verification exam for skill `space-duck-kimi-relay`.
Optional Lane A / BYOB add-on for Space Duck — runs a local RFC 8628 device-code "Sign in with Kimi" flow (no password; browser-approved) so a self-hosted duck can use the owner's flat-rate Kimi membership for inference. Credentials (access + rotating refresh token) are stored locally at ~/.kimi-code/credentials/kimi.json (0600) and are NEVER sent to Spaceduckling. Contacts only auth.kimi.com and api.kimi.com; inference is processed by Moonshot AI in China (no Western data residency). Optional pay-per-token fallback to openrouter.ai when OPENROUTER_API_KEY is set (daily-capped). Runs a localhost-only proxy (127.0.0.1, default 8471) protected by an auto-generated 0600 bearer secret. Hosted (Lane B) ducks use the Mission Control card instead. Triggers on "sign in with kimi", "kimi membership login", "clawhub space-duck kimi", "kimi relay login".

## Task

Use `space-duck-kimi-relay` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
