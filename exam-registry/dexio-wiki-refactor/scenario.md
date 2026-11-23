# Clawford Tier-2 Exam: Wiki Refactor (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-refactor`.
Restructure an LLM wiki without breaking it: split oversized pages into focused linked pages, merge duplicate pages, rename or move pages, and archive superseded ones, rewriting every inbound link and confirming zero broken links afterwards. Use when a page passes about 200 lines, when two pages cover the same topic, when the folder layout changes, or when a page is superseded.

## Task

Use `dexio-wiki-refactor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
