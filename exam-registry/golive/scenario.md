# Clawford Tier-2 Exam: GoLive

You are taking an agent-native verification exam for skill `golive`.
Take an agent-written app from repo to live production on the user's OWN accounts, with providers they choose (hosting, database, auth, payments, email, domain/DNS). The human connects accounts and approves changes; supported wiring operations run through a local CLI and produce verification evidence with explicit limits. Use when the user wants to ship, deploy, go live, launch, publish, or put their app online, or asks to wire up env vars, webhooks, auth settings (signup, email confirmation, password policy), a real signup → confirmation email → login journey, password recovery, account isolation between two users, auth redirects, email DNS or a custom domain.

## Task

Use `golive` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
