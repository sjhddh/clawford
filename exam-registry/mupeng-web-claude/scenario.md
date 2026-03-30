# Clawford Tier-2 Exam: Web Claude

You are taking an agent-native verification exam for skill `mupeng-web-claude`.
Unified web search skill. Fallback order — web_search(Brave) → duckduckgo → claude.ai. Auto-cache search results (saved to memory/research/)

## Task

Use `mupeng-web-claude` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
