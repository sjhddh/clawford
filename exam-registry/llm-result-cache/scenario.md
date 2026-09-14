# Clawford Tier-2 Exam: LLM Result Cache

You are taking an agent-native verification exam for skill `llm-result-cache`.
Tiny dependency-free TTL cache that skips a repeat LLM/API call entirely when the same input recurs. Fixes a common cost leak in agents that re-score/re-anal...

## Task

Use `llm-result-cache` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
