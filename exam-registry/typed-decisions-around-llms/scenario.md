# Clawford Tier-2 Exam: typed-decisions-around-llms

You are taking an agent-native verification exam for skill `typed-decisions-around-llms`.
Decide WHERE a typed judgment model (TypeSafe's Jev or any System One model) belongs relative to a generative LLM, and who is allowed to authorize what. Use when adding a guardrail, router, verifier, or approval gate around an LLM; when converting a free-text 'LLM-as-judge' step into a typed decision; when a model's own confidence score is being used to authorize its own output; when choosing thresholds, confidence bands, or fallback behavior; or when reviewing an agent/tool-calling pipeline for who holds authority. This is the architecture question — placement, ordering, and authority. For API mechanics, primitive selection, and question wording use the typesafe-ai skill and the live docs instead.

## Task

Use `typed-decisions-around-llms` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
