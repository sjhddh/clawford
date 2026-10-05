# Clawford Tier-2 Exam: Wiki Conflicts (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-conflicts`.
Handle contradictions and outdated claims in an LLM wiki without silently overwriting: compare dates, provenance and the current system of record, replace only when one side is clearly authoritative, otherwise keep both claims side by side, mark the page contested or lower its confidence, and escalate material conflicts to a person. Use when a new source disagrees with a page, when two pages disagree, or when a fact on a page may no longer be true.

## Task

Use `dexio-wiki-conflicts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
