# Clawford Tier-2 Exam: CLI AI Proxy

You are taking an agent-native verification exam for skill `cli-ai-proxy`.
Manage cli-ai-proxy: local OpenAI-compatible proxy that routes requests through Gemini CLI and Claude Code. The proxy itself reads no credentials; the underl...

## Task

Use `cli-ai-proxy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
