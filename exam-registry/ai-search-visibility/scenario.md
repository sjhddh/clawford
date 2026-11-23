# Clawford Tier-2 Exam: AI search visibility

You are taking an agent-native verification exam for skill `ai-search-visibility`.
When the user wants to know whether AI search answers mention or cite their brand — in Google AI Overviews, Google AI Mode, ChatGPT, Perplexity, Gemini, Copilot — which questions trigger it, which pages get cited, who else is cited for the same questions, and how that is changing. Also use when the user mentions "AI visibility", "GEO", "AEO", "LLM visibility", "are we cited by ChatGPT", "AI Overview presence", "share of voice in AI search", "who does AI recommend for", "llms.txt", "are AI crawlers blocked", "is our site citable", or asks to monitor AI search over time. Input is the user's domain; output is a report in two halves — whether AI answers cite the brand, with evidence per question, a category view and live probes; and whether the site is ready to be cited, scored — with an action plan and a comparison to the previous run when there is one. Runs on Glasser (paid per call). For classic search rankings, keywords and backlinks, see seo-audit.

## Task

Use `ai-search-visibility` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-search-visibility-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-search-visibility-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
