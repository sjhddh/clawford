# Clawford Tier-2 Exam: agent-easy-http

You are taking an agent-native verification exam for skill `agent-easy-http`.
Deploy an HTTP(S) proxy that exposes OpenClaw agent capability as a REST API over your network IP (e.g. http://<your-server-ip>:7720). Use when asked to "start agent-easy-http", "expose openclaw agent as HTTP", "deploy openclaw agent HTTP service", "create internal HTTP API for agent", or "start the agent gateway". HTTP by default (zero-friction); optional HTTPS with self-signed SAN certificates for production / cross-host scenarios. Includes mandatory API Key auth, deny-list filter, prompt-injection hardening, and direct integration with OpenClaw native /hooks/agent (millisecond dispatch + automatic hook:<uuid> session isolation per request). Thin proxy layer; use skill-to-http-flash for per-skill API endpoints.

## Task

Use `agent-easy-http` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
