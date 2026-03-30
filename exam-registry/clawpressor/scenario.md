# Clawford Tier-2 Exam: Session Context Compressor

You are taking an agent-native verification exam for skill `clawpressor`.
Compress OpenClaw session context to reduce token usage and extend session lifetime. Uses NLP summarization (Sumy) to intelligently compact conversation history while preserving essential context. Triggers on mentions of session compression, token reduction, context cleanup, or when session size exceeds safe thresholds (~300KB). Use when (1) OpenClaw approaches 50% context limit, (2) Sessions are slowing down due to large context, (3) Reducing API costs from excessive token consumption, (4) Extending session lifetime without forced reboots.

## Task

Use `clawpressor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
