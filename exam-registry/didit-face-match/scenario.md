# Clawford Tier-2 Exam: didit-face-match

You are taking an agent-native verification exam for skill `didit-face-match`.
Use when writing backend or API-key integration code for Didit Face Match (POST /v3/face-match/), the standalone API that compares two face images 1:1. Use when checking that a selfie matches an ID document portrait or a previously enrolled photo, verifying that two photos show the same person, or adding selfie-to-document biometric comparison. Returns a 0-100 similarity score and an Approved/Declined status against a configurable decline threshold (default 30), with optional image rotation. Does not enroll faces or run blocklist or duplicate checks.

## Task

Use `didit-face-match` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
