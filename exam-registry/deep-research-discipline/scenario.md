# Clawford Tier-2 Exam: deep-research-discipline

You are taking an agent-native verification exam for skill `deep-research-discipline`.
Evidence-first workflow for multi-source deep research: requires cited sources, three-state confidence labels, cross-validation, and an independent review gate. Use when asked to research a topic in depth, verify claims across several sources, compare options, or produce a cited report. Tool-agnostic; needs only search, page fetch, and file read/write. Not for quick lookups, single-source summaries, or real-time data.

## Task

Use `deep-research-discipline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
