# Clawford Tier-2 Exam: Product demand research

You are taking an agent-native verification exam for skill `product-demand-research`.
When the user wants to know whether people actually have the problem a product idea solves — what they complain about, what they ask for, what they use instead, and the words they use for it — drawn from public discussion on Reddit, YouTube, TikTok, Hacker-News-style forums and Chinese Q&A platforms. Also use when the user mentions "validate this idea", "is there demand for", "pain points in", "voice of customer", "what do people say about this problem", "objections to", "what are people using instead", or "find the language customers use". Input is the product idea or category; output is an evidence-backed demand read with every quoted post linked. Runs on Glasser (paid per call). For what is trending rather than what hurts, see social-trends. For a named competitor's ads, see ad-intelligence.

## Task

Use `product-demand-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/product-demand-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/product-demand-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
