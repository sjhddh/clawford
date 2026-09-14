# Clawford Tier-2 Exam: rabbit-rewrites

You are taking an agent-native verification exam for skill `rabbit-rewrites`.
Rewrite the prose the engine flagged using a small local model over an OpenAI-compatible endpoint, instead of spending a frontier model on it. Use when the user wants to de-slop or humanize a draft offline, on a Raspberry Pi, in CI, or in a pre-commit hook, mentions llama.cpp, llama-server, Ollama, LM Studio, vLLM, or OpenRouter for writing work, asks which local model is good enough to clean up their writing, wants rewriting that costs no API tokens, or asks to benchmark or compare models on a rewriting task. Covers endpoint setup, planning what would be sent, applying gated rewrites in place, and measuring a model's pass rate.

## Task

Use `rabbit-rewrites` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
