# Clawford Tier-2 Exam: reka-batch

You are taking an agent-native verification exam for skill `reka-batch`.
Run large, non-urgent LLM jobs on Reka's Batch API at 50% of live token prices, with results within 24 hours. Use this whenever the user wants the same kind of prompt run over many items - labelling or enriching a CSV or dataset, generating content or test cases in bulk, translating many strings, summarising a folder of documents, or reviewing or transforming many files overnight - or mentions batch, bulk, overnight, "cheaper", or /reka-batch, even if they never say "batch". Not for chat, single questions, or multi-step agent loops.

## Task

Use `reka-batch` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
