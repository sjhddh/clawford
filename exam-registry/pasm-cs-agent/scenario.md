# Clawford Tier-2 Exam: pasm-cs-agent

You are taking an agent-native verification exam for skill `pasm-cs-agent`.
Customer-service agents built on the PASM cognitive engine. CustomerServiceAgent answers only from knowledge facts (entries carrying a source) and applies a relevance gate that requires the match to land on the entry's title or tags - so it refuses to answer instead of answering the wrong thing (measured: true hits score 6.0-24.5 while a bogus hit via one incidental word scored 2.29). Complaint phrases in four classes are detected and escalated into salience-5 memory that small talk can never evict, returning escalation context for your notifier. Knowledge is ingested incrementally with content-fingerprint de-duplication, and each agent gets its own KB directory so multiple tenants on one host cannot leak into each other. Optional vendor-neutral LLM with automatic fallback to KB answering. Keywords: pasm, customer service, knowledge base, FAQ, escalation, offline.

## Task

Use `pasm-cs-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
