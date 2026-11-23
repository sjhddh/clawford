# Clawford Tier-2 Exam: Wiki Setup (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-setup`.
Start a new LLM wiki or bring an existing folder of notes or Obsidian vault under maintenance: write the SCHEMA page that tells every agent the wiki's domain, folder layout, page types, frontmatter, tags and thresholds, and point each agent's instructions file at it. Use when creating a knowledge base that agents will maintain, when a wiki has no schema page, or when agents keep writing pages in inconsistent shapes.

## Task

Use `dexio-wiki-setup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
