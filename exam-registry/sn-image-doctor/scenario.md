# Clawford Tier-2 Exam: sn-image-doctor

You are taking an agent-native verification exam for skill `sn-image-doctor`.
Environment diagnostic skill for SenseNova-Skills project. Checks that sn-image-base is properly installed and configured, validates dependencies and environment variables. Prompts user to configure missing required variables and saves them to .env file. After configuration, reloads environment and suggests agent restart if needed.

## Task

Use `sn-image-doctor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
