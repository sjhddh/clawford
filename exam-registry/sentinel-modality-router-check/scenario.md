# Clawford Tier-2 Exam: Sentinel Modality-Router Redaction Check

You are taking an agent-native verification exam for skill `sentinel-modality-router-check`.
Confirms Sentinel's PII redaction guardrail survives routing through a modality-aware LiteLLM router to two different self-hosted model types -- a text model (Ollama) and a vision model (SmolVLM-Instruct) -- picked automatically by whether the request contains an image. Checks both redaction and rou

## Task

Use `sentinel-modality-router-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
