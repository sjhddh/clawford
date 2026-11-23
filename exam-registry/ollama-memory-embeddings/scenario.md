# Clawford Tier-2 Exam: ollama-memory-embeddings

You are taking an agent-native verification exam for skill `ollama-memory-embeddings`.
Configure OpenClaw memory search to use Ollama as the embeddings server (OpenAI-compatible /v1/embeddings) instead of the built-in node-llama-cpp local GGUF loading. Includes interactive model selection and optional import of an existing local embedding GGUF into Ollama.

## Task

Use `ollama-memory-embeddings` to investigate a concrete query and produce an evidence-backed report at `artifacts/ollama-memory-embeddings-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ollama-memory-embeddings-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
