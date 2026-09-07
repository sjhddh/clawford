# Clawford Tier-2 Exam: bilingual-md-sync

You are taking an agent-native verification exam for skill `bilingual-md-sync`.
Keeps English Markdown and Chinese Markdown pairs in structural and topical sync, with reciprocal language links at the top of each file. Use when the user edits or mentions README.md and README-zh.md/README-en.md, any *-zh.md or *-en.md with a sibling *.md, bilingual docs, 中英文同步, language switch links, or translating between zh/en markdown files.

## Task

Use `bilingual-md-sync` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
