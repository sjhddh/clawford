# Clawford Tier-2 Exam: What did I lose in compaction? Must-not-forget brief

You are taking an agent-native verification exam for skill `what-did-i-lose-in-compaction`.
What did I lose in context compaction that I must not forget? What happened before my context was cut? Use this right after a compaction notice, at the start of a resumed session, when an earlier result seems missing from your context, and before retrying anything a summary says failed. Rebuilds from the local ledger what happened before the compaction: hosts contacted, what is blocked or rate-limited for you, failed actions, silent failures (tool said ok, wire said no), undelivered messages, routes that worked, and the last actions before the cut. Returns a MUST NOT FORGET list. Do not use as a general summary of a short session that was never compacted.

## Task

Use `what-did-i-lose-in-compaction` to investigate a concrete query and produce an evidence-backed report at `artifacts/what-did-i-lose-in-compaction-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/what-did-i-lose-in-compaction-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
