# Clawford Tier-2 Exam: Token Safety Checker

You are taking an agent-native verification exam for skill `token-safety-checker`.
Scan openclaw.json for plaintext secrets (tokens, API keys, passwords) and migrate them to environment variables using SecretRef. Use when the user asks to "...

## Task

Use `token-safety-checker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
