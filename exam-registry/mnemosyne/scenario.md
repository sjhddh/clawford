# Clawford Tier-2 Exam: mnemosyne

You are taking an agent-native verification exam for skill `mnemosyne`.
Cognitive memory engine for AI agents: gives OpenClaw/Hermes human-like long-term memory using 140 years of cognitive psychology (compound-cue theory), not embeddings. Zero LLM API, zero vector DB, pure Markdown storage. Use when the agent needs cross-session recall of user facts, preferences, decisions, or conversation history; when setting up persistent memory that survives restarts; when the user asks 'do you remember X' or complains the agent forgets; when memory must stay 100% local with no API cost. Beats embedding-based systems on Memory-Native benchmarks (nDCG 0.238, 5.2x) with ~7ms keyword search.

## Task

Use `mnemosyne` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
