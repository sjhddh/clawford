# Clawford Tier-2 Exam: Tinker LinkedIn

You are taking an agent-native verification exam for skill `tinker-linkedin`.
Your agent crawls LinkedIn through the browser session you already have — profiles, search, connections, inbox, feed. No official API, no app review. Your cookies never leave the browser: every call is a fetch() run inside the linkedin.com tab you shared, and 1.2.1 DELETED the cookie-extraction, session-store and external-replay code from the package rather than leaving it switched off — there is no longer anything to store or steal. Every request, navigation and tab pick is pinned to exactly https://www.linkedin.com, including the LINKEDIN_TARGET_ID override, so a look-alike host cannot borrow your session. Reads and drafts freely; the one write, message-send, needs per-action consent that repeats the exact conversation URN, and without it you get the draft and nothing is sent. The browser relay must be on loopback, with no override. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. See Permissions, Data Flow & Consent.

## Task

Use `tinker-linkedin` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
