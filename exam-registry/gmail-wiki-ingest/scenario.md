# Clawford Tier-2 Exam: gmail-wiki-ingest

You are taking an agent-native verification exam for skill `gmail-wiki-ingest`.
Triage a batch of the user's email against their personal knowledge wiki and hand the verdicts back to javis-server, which bands them into auto-ingest / review card / auto-discard. Runs daily on an in-container openclaw cron agent turn, and on demand when the user asks to "ingest my email" / "gmail ingest" / "整理邮件". Four script commands do all the I/O over the gateway token — `fetch` returns thread metadata plus the user's knowledge model, their recent decisions and a per-sender trusted flag; `content` returns the full text of a shortlist of up to 12 threads, and only ones this run's `fetch` already offered; `submit` takes one verdict per candidate; `report` pushes the run digest to the user's chat. `rubric.md` owns the judgment — the category enum, the 0-1 relevance score, the citation rule and the policy for which threads earn a body read. Neither file owns the outcome — bands, sender trust, ref validation and every write stay server-side. Every run ends in a `report`, including a run that fetched nothing. Triggers — 'ingest my email', 'gmail ingest', 'sync my inbox to the wiki', '整理邮件', '邮件入库'.

## Task

Use `gmail-wiki-ingest` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
