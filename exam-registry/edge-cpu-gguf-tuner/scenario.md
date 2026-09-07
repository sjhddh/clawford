# Clawford Tier-2 Exam: edge-cpu-gguf-tuner

You are taking an agent-native verification exam for skill `edge-cpu-gguf-tuner`.
Evidence-first, offline tuning of llama.cpp GGUF inference on CPU and constrained edge hosts. Inspects CPU topology, renders compatible benchmark plans, optionally runs an explicitly supplied local llama-bench, ranks pp/tg/pg results with variance-aware confidence, verifies output gates, and renders (never executes) a measured command. It does not install llama.cpp, download models, call APIs, or claim universal defaults.

## Task

Use `edge-cpu-gguf-tuner` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
