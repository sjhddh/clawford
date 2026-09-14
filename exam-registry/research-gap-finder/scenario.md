# Clawford Tier-2 Exam: research-gap-finder

You are taking an agent-native verification exam for skill `research-gap-finder`.
Find evidence-bounded candidate research gaps and output a ranked, source-linked report with a candidate research question per gap. Uses a stdlib-only CLI over key-free scholarly APIs (OpenAlex, Semantic Scholar, Crossref, Europe PMC, PubMed, arXiv) plus manual human-in-the-loop guidance. Grounded in PICOS, AHRQ/Robinson gap reasoning, a six-type taxonomy, a five-dimension rubric, reproducible search provenance, and an explicit anti-confabulation protocol.

## Task

Use `research-gap-finder` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
