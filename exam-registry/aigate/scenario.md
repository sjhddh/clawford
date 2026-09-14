# Clawford Tier-2 Exam: aigate

You are taking an agent-native verification exam for skill `aigate`.
Self-hosted AI platform — one `docker-compose up`, one OpenAI-compatible endpoint at http://localhost:4000. Bundles inference (Groq/Cerebras/OpenRouter/HuggingFace/Mistral/Cohere/Ollama/vLLM/llama.cpp/claudebox/pibox-zai/Anthropic/OpenAI), MCP tool use, a stealth browser cluster, image generation (FLUX/DALL-E/SD), speech synthesis (Kokoro/Qwen3-TTS/Chatterbox/OpenAI TTS), transcription (Whisper/Parakeet), S3-compatible object storage, agentic code execution (Claude Code + pi-coding-agent + sandboxed piston), web search (SearXNG), an email gateway (mailbox), a Telegram client (Telethon), time-series forecasting + tabular ML (predictalot), audio/video production (audiolla/flickies), an async job queue (proxq), and a web UI (LibreChat) — all reachable through one bearer token and automatic per-model fallback routing. Use when the user wants a one-command self-hosted OpenAI-compatible stack that aggregates many providers/tools behind a single endpoint instead of wiring each service up individually.

## Task

Use `aigate` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
