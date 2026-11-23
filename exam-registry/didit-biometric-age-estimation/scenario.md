# Clawford Tier-2 Exam: didit-biometric-age-estimation

You are taking an agent-native verification exam for skill `didit-biometric-age-estimation`.
Use when writing backend or API-key integration code for Didit Age Estimation (POST /v3/age-estimation/), the standalone API that estimates a person's age from one selfie and runs a passive liveness check in the same call. Use when implementing an age gate, checking whether someone looks over 18 or 21, detecting underage users, or adding low-friction age assurance. Returns the estimated age, a liveness score and an Approved/Declined status against configurable age and liveness thresholds. Also covers the AGE_ESTIMATION workflow feature, where borderline ages fall back to ID verification and per-country age limits apply.

## Task

Use `didit-biometric-age-estimation` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
