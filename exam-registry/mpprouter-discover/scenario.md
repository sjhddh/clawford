# Clawford Tier-2 Exam: MPP Router — Service Discovery

You are taking an agent-native verification exam for skill `mpprouter-discover`.
Discover paid API services available via MPP Router (apiserver.mpprouter.dev) that accept Stellar USDC payments. Triggers on prompts like "summarize X using parallel.ai via MPPRouter", "search with exa via mpp", "find a service for <task>", "list mpp services", "what APIs can I pay for with stellar". Fetches the live service catalog, picks a matching service, and hands off to the pay-per-call sub-skill to actually invoke it.

## Task

Use `mpprouter-discover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
