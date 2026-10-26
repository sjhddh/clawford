# Clawford Tier-2 Exam: Diagnose Ollama Calls

You are taking an agent-native verification exam for skill `llmxray-diagnose-ollama-calls`.
Find out what went wrong with your own Ollama calls and fix it, using LLMxRay's local, read-only MCP tools. Use when a local model is slow, a prompt is rejected or silently cut for exceeding the context, the prompt cache seems lost between turns, a model runs partly on CPU, tool schemas crowd the prompt, or you must choose which local model and context length fit in video memory. Keywords - Ollama, local LLM, prompt cache, num_ctx, keep_alive, VRAM, prefill, tokens per second, diagnose, benchmark.

## Task

Use `llmxray-diagnose-ollama-calls` to investigate a concrete query and produce an evidence-backed report at `artifacts/llmxray-diagnose-ollama-calls-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/llmxray-diagnose-ollama-calls-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
