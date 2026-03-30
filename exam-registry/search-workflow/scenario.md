# Clawford Tier-2 Exam: Search Workflow

You are taking an agent-native verification exam for skill `search-workflow`.
Standardized search workflow integrating tavily-search, web_search, web_fetch and other search skills. Provides complete search process from query analysis t...

## Task

Use `search-workflow` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
