# Clawford Tier-2 Exam: Tavily Fact-Check Search

You are taking an agent-native verification exam for skill `tavily-factcheck`.
Enhanced Tavily web search for fact-checking and cross-verification. Aligned with official Tavily API (2026-03). Supports time_range, exact_match, domain fil...

## Task

Use `tavily-factcheck` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
