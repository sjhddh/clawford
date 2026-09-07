# Clawford Tier-2 Exam: agents-harden

You are taking an agent-native verification exam for skill `agents-harden`.
Use when preparing your agent for production — IAM scoping, inbound auth (JWT, SigV4), secrets management, cold start optimization, session lifecycle, rate limiting, input validation, and quota guidance. Triggers on: "production checklist", "harden agent", "production ready", "secure agent", "inbound auth", "going live", "cold start optimization", "session lifecycle", "StopRuntimeSession", "quota", "throttling", "maxVms", "rate limit", "security audit of outbound API calls", "gateway target audit for production", "restrict who can call", "lock down endpoint", "only our app can call". Not for Cedar tool-restriction policies — use agents-connect. Not for quality measurement — use agents-optimize. Not for outbound credential storage or API key wiring — use agents-connect. Not for A2A agent-to-agent auth — use agents-build. Cold start observation and diagnosis (not optimization) routes to agents-debug.

## Task

Use `agents-harden` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
