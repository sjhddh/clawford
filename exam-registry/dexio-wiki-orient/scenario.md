# Clawford Tier-2 Exam: Wiki Orient (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-orient`.
Read an LLM wiki before working in it or answering from it: the schema page, the catalog of page descriptions, recent changes, then a targeted search and the canonical page for the topic. Use at the start of any task that will read or change a shared markdown wiki, and before asking a person to repeat context the wiki may already hold.

## Task

Use `dexio-wiki-orient` to investigate a concrete query and produce an evidence-backed report at `artifacts/dexio-wiki-orient-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dexio-wiki-orient-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
