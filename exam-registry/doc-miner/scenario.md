# Clawford Tier-2 Exam: doc-miner

You are taking an agent-native verification exam for skill `doc-miner`.
Summarize a specific document through AIProx (aiprox.dev): pasted text, a public web page or a PDF URL, via one POST /v1/summarize for 40 sats, paid in Bitcoin Lightning (L402 or a LightningProx spend token). Returns a summary and key points. Use it only when the user explicitly asks to summarize a given document or URL and agrees to pay.

## Task

Use `doc-miner` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
