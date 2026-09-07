# Clawford Tier-2 Exam: skill-to-http

You are taking an agent-native verification exam for skill `skill-to-http`.
Expose installed agent Skills as HTTP(S) REST API services. Runs a persistent FastAPI server that auto-generates an API endpoint per Skill, with sync/async execution, webhook callbacks, and a multi-engine sub-agent executor (OpenClaw / Claude Code / Codex CLI / LLM fallback). Ships a bilingual (EN/ZH) web management console. HTTP by default (zero-friction), optional HTTPS with self-signed SAN certificates for production. Use when you need to serve Skills over HTTP, call Skills remotely, or expose Skill capabilities to external systems.

## Task

Use `skill-to-http` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
