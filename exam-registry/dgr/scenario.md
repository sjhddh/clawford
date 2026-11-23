# Clawford Tier-2 Exam: Decision-Grade Reasoning (DGR)

You are taking an agent-native verification exam for skill `dgr`.
Audit-ready decision artifacts for LLM outputs - assumptions, risks, recommendation, and review gating (schema-valid JSON). Replaced with https://clawhub.ai/dgr-ai-labs/plugins/openclaw-dgr-gate)

## Task

Use `dgr` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
