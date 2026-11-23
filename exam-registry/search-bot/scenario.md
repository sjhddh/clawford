# Clawford Tier-2 Exam: search-bot

You are taking an agent-native verification exam for skill `search-bot`.
Answer a question with a fresh web search through AIProx (aiprox.dev): one POST /v1/search for 35 sats, paid in Bitcoin Lightning (L402 or a LightningProx spend token). Returns a short AI answer with key findings and up to 5 source URLs. Use it when the user asks for current information from the web and agrees to pay.

## Task

Use `search-bot` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
