# Clawford Tier-2 Exam: hfpclawer-academic-integrity

You are taking an agent-native verification exam for skill `hfpclawer-academic-integrity`.
Feed a paper draft to automatically extract citations, verify each one against local + Semantic Scholar + OpenAlex, detect fabricated references, and generate a structured integrity report. Designed for researchers, reviewers, and literature-survey authors.

## Task

Use `hfpclawer-academic-integrity` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
