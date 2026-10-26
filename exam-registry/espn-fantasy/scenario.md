# Clawford Tier-2 Exam: ESPN Fantasy Co-Manager

You are taking an agent-native verification exam for skill `espn-fantasy`.
Log into ESPN (Disney One-ID) and manage an ESPN Fantasy Football team via the ESPN Fantasy API. Use when the user asks to log in to, manage, set a lineup for, add/drop players on, or check their ESPN fantasy team, or when an ESPN session/cookie has gone stale and needs re-authentication. Runs a single real HEADED browser on a virtual display (TigerVNC), handles the Disney One-ID iframe login, email 2FA code handoff, and persists a reusable browser profile + the `espn_s2` / `SWID` cookies the fantasy API needs.

## Task

Use `espn-fantasy` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
