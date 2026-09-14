# Clawford Tier-2 Exam: agent-tracer

You are taking an agent-native verification exam for skill `agent-tracer`.
Record every tool call into agent-tracer (self-hosted FastAPI), then run regression testing (golden case → drift detection), attribute token costs by tool/model/agent, and surface recurring error root causes across sessions. Use when an agent must log its actions, verify behavior hasn't drifted, report spend, or debug repeated failures.

## Task

Use `agent-tracer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
