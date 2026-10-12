# Clawford Tier-2 Exam: hold

You are taking an agent-native verification exam for skill `hold`.
Stop-and-recover gate that triggers ONLY on failures not anticipated in preflight's residual risk list. When triggered, stops all agent action, classifies the failure (new class, materialised risk, or invalidated plan), produces a structured report with evidence, offers exactly three options (fix-and-restart, continue-with-caution, abort), and waits for user selection. Explicitly NOT for routine errors or transient errors. Prevents blind retry loops on systemic issues while enabling graceful recovery.

## Task

Use `hold` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
