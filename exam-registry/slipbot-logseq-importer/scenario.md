# Clawford Tier-2 Exam: SlipBot Logseq Importer

You are taking an agent-native verification exam for skill `slipbot-logseq-importer`.
Import notes from Logseq pages into the slipbox. Use when user pastes a Logseq page with properties and bulleted notes. Parses page-level properties, extracts each bullet as an individual note, handles nested bullets by adding parent context, then runs slipbot for each.

## Task

Use `slipbot-logseq-importer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
