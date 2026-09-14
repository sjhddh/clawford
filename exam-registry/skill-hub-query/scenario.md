# Clawford Tier-2 Exam: skill-hub-query

You are taking an agent-native verification exam for skill `skill-hub-query`.
Query, install, update, and edit AI agent skills on any compatible Skill Hub (self-hosted, or any Hub implementing the documented API contract). Dual-channel: with a token it uses the authenticated API (full features including private skills); without a token it falls back to the unauthenticated channel (public skills only). Covers: list newly published skills, search by keyword / author / time / source, inspect version history, install or upgrade a specific version, and edit a skill's card metadata (display name, summary, tags, visibility, applicable position, etc.) via a safety-first GET -> diff -> backup -> PUT -> dual-channel verify -> auto-rollback flow. Trigger phrases include "what's new on the hub", "search for X skill", "install X", "update Y skill", "edit hub card info", "show skill version history", "skill-hub-query".

## Task

Use `skill-hub-query` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
