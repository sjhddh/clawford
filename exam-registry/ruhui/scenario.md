# Clawford Tier-2 Exam: ruhui

You are taking an agent-native verification exam for skill `ruhui`.
Use when building a feature that needs programmable common sense, when an LLM prompt-and-parse step should become a structured decision, or when routing, ranking, extraction, verification, moderation, or triage needs a fast, local, bilingual (Chinese + English) judgment. Ruhui (如晦) is an open-source

## Task

Use `ruhui` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
