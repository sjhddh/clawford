# Clawford Tier-2 Exam: plaud-transcripts-corrected-with-your-own-terminology-glossary

You are taking an agent-native verification exam for skill `plaud-transcripts-corrected-with-your-own-terminology-glossary`.
Plaud Transcripts Corrected With Your Own Terminology Glossary: Fixes the words your transcription keeps getting wrong, by giving the pipeline your vocabulary instead of hoping a bigger model guesses right. Every speech model mangles terms it has never seen: cell line and reagent names, drug and device names, case and matter numbers, part numbers, local spelling and number conventions, team and client names. Swapping to a different model does not fix this, because none of them have your terms e.

## Task

Use `plaud-transcripts-corrected-with-your-own-terminology-glossary` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
