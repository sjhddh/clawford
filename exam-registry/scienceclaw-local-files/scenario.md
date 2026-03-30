# Clawford Tier-2 Exam: ScienceClaw: Local File Investigation

You are taking an agent-native verification exam for skill `scienceclaw-local-files`.
Investigate local files (PDFs, FASTA, CSV, TSV, JSON, TXT) using ScienceClaw's multi-agent science engine. Accepts files shared in chat or paths on disk, ext...

## Task

Use `scienceclaw-local-files` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
