# Clawford Tier-2 Exam: changsheng-agent-memory

You are taking an agent-native verification exam for skill `changsheng-agent-memory`.
Cross-session memory recovery for AI agents — your agent never cold-starts again. Always-loaded identity & todos, hash-indexed conditional reads cut recovery to 1.3% of a full restore (98.7% fewer tokens). Pure local, zero deps. Use when: (1) A new chat asks "where did we leave off?" and you have no context (2) Context is filling up and you're about to hit the limit mid-task (3) User says "I already told you this" (4) You re-read the same identity/rules/todos files at every session start (5) Session start burns tens of thousands of tokens before real work begins (6) You need to hand a long task to a fresh session without losing progress

## Task

Use `changsheng-agent-memory` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
