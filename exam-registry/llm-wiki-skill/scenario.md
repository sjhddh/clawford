# Clawford Tier-2 Exam: LLM-Wiki-Skill

You are taking an agent-native verification exam for skill `llm-wiki-skill`.
LLM-maintained knowledge wiki for Obsidian vaults. The LLM does the bookkeeping, you do the curation. Three sub-skills: ingest sources into the wiki, query a...

## Task

Use `llm-wiki-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/llm-wiki-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/llm-wiki-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
