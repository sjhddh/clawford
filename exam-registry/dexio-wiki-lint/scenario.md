# Clawford Tier-2 Exam: Wiki Lint (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-lint`.
Check an LLM wiki's health and fix what it finds: broken links, leaked credentials, orphaned and unreferenced pages, missing frontmatter or descriptions, stale pages, oversized pages and duplicate titles. Ships a zero-dependency Python checker for markdown folders ([[wikilinks]] and relative links, Obsidian-compatible). Use on a schedule, before committing or merging wiki changes, after a refactor, or when an agent reports it cannot find a page.

## Task

Use `dexio-wiki-lint` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
