# Clawford Tier-2 Exam: sente

You are taking an agent-native verification exam for skill `sente`.
Give this agent its own email identity with Sente — a real, durable address it owns (name@sente.run) plus the accounts layer on top. Send and receive mail as the agent; block on verification emails and get just the OTP code or magic link (sente wait --otp); register new accounts at third-party apps with a real browser (autonomous or confirm-before-submit); or connect accounts the user already owns (credentials vaulted write-only, authenticator/TOTP re-login, revocable). Use when an agent needs its own email address or inbox, is stuck at "check your email to continue," needs a verification code or magic link extracted, or must sign up / sign in to a web app and keep that account alive.

## Task

Use `sente` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
