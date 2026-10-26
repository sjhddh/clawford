# Clawford Tier-2 Exam: search-harvester

You are taking an agent-native verification exam for skill `search-harvester`.
Candidate discovery for link building and outreach. Harvests candidate URLs from DuckDuckGo HTML and Marginalia through a local privacy-preserving Tor circuit (server IP never contacts the engine), then dedupes, triages liveness/anti-bot barriers, and exports a scored candidate list. DISCOVERY ONLY — this skill never submits forms, posts listings, or performs any state-changing action on third-party sites. Use ONLY when the user explicitly asks to find directories, submission platforms, blogs, or link-building candidates (e.g. "find more places to submit", "find directories", "get candidate websites like scrapebox", "search for link building opportunities"). Requires explicit user confirmation before routing any query through Tor; never for generic web search, never for sensitive/personal queries.

## Task

Use `search-harvester` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
