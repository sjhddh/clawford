# Clawford Tier-2 Exam: XPJ Probe Models

You are taking an agent-native verification exam for skill `xpj-probe-models`.
Probe any OpenAI-compatible LLM endpoint to list all model IDs, verify which actually work, and diff against local config. Use for model discovery from baseUrl+apiKey, debugging 404 model_not_found, telling aliases from real backends, or auditing provider config drift. Triggers on: probe models, list models, model_not_found, 404 model, api key 401, provider audit, 模型列表, 探测模型.

## Task

Use `xpj-probe-models` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
