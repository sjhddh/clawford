# Clawford Tier-2 Exam: humanizer-academic

You are taking an agent-native verification exam for skill `humanizer-academic`.
Rewrite AI-generated SERIOUS NONFICTION (EN/ZH) to read human, inventing nothing, in mode `academic` or `popsci`; ABSTAIN-FIRST — leaves it unchanged if it already reads human. Use for AI-looking academic/serious-popsci prose, or "$humanizer-academic". NOT for casual chit-chat, poetry/fiction, or inventing facts.

## Task

Use `humanizer-academic` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
