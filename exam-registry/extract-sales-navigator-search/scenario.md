# Clawford Tier-2 Exam: extract-sales-navigator-search

You are taking an agent-native verification exam for skill `extract-sales-navigator-search`.
Extract a Sales Navigator search that is bigger than one extraction can hold: count it, split it under the cap, merge the pieces back to the fewest searches, and load them into a handful of models, for accounts (1,000 per search) or people (2,500 per search), powered by Cargo. Triggers: "my Sales Nav search has 30,000 results", "extract more than 1,000 accounts from Sales Navigator", "get past the 2,500 lead limit", "split a large LinkedIn search", "Sales Navigator search optimizer", "the extraction stopped at 1,000", "pull every company in this Sales Nav search". Providers: salesNavigator. Skip when: the search is already under the cap or you want a quick list today — use build-tam-list for companies or find-b2b-leads for people; or you want the list kept current — use tam-building.

## Task

Use `extract-sales-navigator-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/extract-sales-navigator-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/extract-sales-navigator-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
