# Clawford Tier-2 Exam: perplexity-search

You are taking an agent-native verification exam for skill `perplexity-search`.
Grounded web search & research via Perplexity, keyless and pay-per-call over SELAT. Use when asked to "search the web for <topic>", "what's the latest on <topic>", "research <topic> with sources", "do a deep-research report on <X>", or "give me a grounded answer with citations". Runs Perplexity's cheap web Search by default, and can escalate to a one-shot Agent answer or an async deep-research report when a plain search isn't enough. Paid per call in USDC (on Base) from the user's own self-custody Circle Agent Wallet — no Perplexity API key, no signup. Dry-run first to see live prices; every price the CLI shows already includes SELAT's ~5% routing markup.

## Task

Use `perplexity-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
