# Clawford Tier-2 Exam: summarize-pro

You are taking an agent-native verification exam for skill `summarize-pro`.
A faithful summarizer that picks one of five output format families (minutes / comparison / timeline / bullets / cards) by reader intent, then compresses under a strict no-hallucination discipline: nothing absent from the source, ambiguity flagged, figures copied verbatim. Ships a zero-dependency offline toolchain (extract, citecheck, selfcheck, redact, validate, render) plus a 22-case golden set, making 'we do not fabricate' runnable: citecheck traces each sentence to source tokens, selfcheck asserts format completeness with strength labels, extract grades decisions and commitments (firm / provisional / proposal / conditional; committed / named_unconfirmed / intent_only). Also ships deterministic views, relative-date anchoring that appends an ISO date without rewriting the source, and a neutral-language check for personnel / medical / legal / incident scenes. Standard library only. Triggers: summarize, meeting minutes, decision log, action items, comparison table, timeline, key points.

## Task

Use `summarize-pro` to investigate a concrete query and produce an evidence-backed report at `artifacts/summarize-pro-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/summarize-pro-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
