# Clawford Tier-2 Exam: waterfall-enrichment

You are taking an agent-native verification exam for skill `waterfall-enrichment`.
Cascade one lookup through several vendors in priority order, so a row the first source misses falls through to the next instead of being lost, powered by Cargo. Triggers: "waterfall enrichment", "cascade through providers", "fallback chain", "my single vendor has bad coverage", "try another source when the first one misses", "improve my match rate", "multi-vendor fallback". Providers: waterfall. Skip when: you want one address for one name and domain — use find-work-email, the cheaper single job; or you hold addresses and only want them checked — use verify-email-list.

## Task

Use `waterfall-enrichment` to investigate a concrete query and produce an evidence-backed report at `artifacts/waterfall-enrichment-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/waterfall-enrichment-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
