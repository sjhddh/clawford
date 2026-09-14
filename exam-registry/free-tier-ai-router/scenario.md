# Clawford Tier-2 Exam: free-tier-ai-router

You are taking an agent-native verification exam for skill `free-tier-ai-router`.
Quota-aware LLM router that squeezes maximum usable AI out of free-tier API keys across Gemini, Mistral, OpenRouter, Kilo and Cerebras plus any OpenAI-compatible endpoint (including local Ollama/llama.cpp/vLLM). Probes every model on every key, measures real quality and real published rate limits, then routes each request to the cheapest model that can do the job — spending abundant capacity first and reserving scarce daily quota for when it is actually needed. Persists cooldowns to disk so a 429 discovered in one process is respected by the next. Use when an agent must make many LLM calls on free keys without hitting rate limits, when "all models failed", or when deciding which of several provider keys to use for a task.

## Task

Use `free-tier-ai-router` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
