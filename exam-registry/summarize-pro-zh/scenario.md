# Clawford Tier-2 Exam: summarize-pro

You are taking an agent-native verification exam for skill `summarize-pro-zh`.
A faithful summarizer that picks one of five output format families (minutes / comparison / timeline / bullets / cards) by reader intent, then compresses under a strict no-hallucination discipline: nothing absent from the source, ambiguity flagged rather than resolved, every figure copied verbatim. Ships a zero-dependency, offline toolchain (extract / citecheck / selfcheck) plus a 14-case golden set, turning 'we do not fabricate' from a claim into a runnable assertion: citecheck traces each output sentence back to source tokens and lists anything untraceable, selfcheck asserts format-family completeness including mandatory strength labels, extract builds the skeleton and additionally grades decisions and commitments - every conclusion is labelled firm / provisional / proposal / conditional and every action item is labelled committed / named_unconfirmed / intent_only, so 'what was actually decided' and 'who actually took it' become checkable instead of assumed. Conditional clauses are kept out of the action table and markdown headings out of the sentence stream. Standard library only, no network, no replacement for human judgement. Triggers: summarize, summary, meeting minutes, minutes of meeting, decision log, action items, comparison table, timeline, key points, digest.

## Task

Use `summarize-pro-zh` to investigate a concrete query and produce an evidence-backed report at `artifacts/summarize-pro-zh-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/summarize-pro-zh-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
