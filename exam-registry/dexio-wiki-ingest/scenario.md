# Clawford Tier-2 Exam: Wiki Ingest (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-ingest`.
Compile a source (article, paper, transcript, meeting notes, doc, dataset) into an LLM wiki with provenance: keep an immutable raw copy with a hash, update every existing page the source touches instead of writing one summary page, cite the source at each claim, and label how far each claim can be trusted. Use when adding a new source to a wiki or when asked to read something and add it to the wiki.

## Task

Use `dexio-wiki-ingest` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
