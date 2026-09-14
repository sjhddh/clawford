# Clawford Tier-2 Exam: sn-ppt-doctor

You are taking an agent-native verification exam for skill `sn-ppt-doctor`.
Environment diagnostic for the PPT family. Validates sn-image-base, API keys, Node runtime, and optional deps; interactively writes .env for required vars. Runs before sn-ppt-entry; does not modify sn-image-* skills.

## Task

Use `sn-ppt-doctor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
