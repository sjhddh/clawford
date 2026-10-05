# Clawford Tier-2 Exam: Key‑Safe Skill Generator

You are taking an agent-native verification exam for skill `key-safe-skill-generator`.
A documentation‑only meta‑skill that teaches AI agents how to generate secure, zero‑exposure skills using MGC Blackbox 1.4.10. Credentials are stored encrypted; local scripts read them via HTTP API at runtime, while AI agents never touch plaintext.

## Task

Use `key-safe-skill-generator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
