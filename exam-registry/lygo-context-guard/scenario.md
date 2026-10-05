# Clawford Tier-2 Exam: LYGO Context Guard

You are taking an agent-native verification exam for skill `lygo-context-guard`.
LYGO Context Guard — pre-flight token budget, secret redaction, and deterministic context compaction for AI agents. Use when stuffing tool dumps, logs, files, or long chats into a model; when context is too large; when you need to save tokens / reduce API cost; when you must redact API keys before re-injection. Pure local stdlib. No network, no subprocess. Commands: estimate, redact, compact, budget, toolpack, preflight. Install clawhub:@deepseekoracle/lygo-context-guard.

## Task

Use `lygo-context-guard` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
