# Clawford Tier-2 Exam: Office Collaboration Radar (English)

You are taking an agent-native verification exam for skill `office-collaboration-radar-en`.
Extract an evidence-linked collaboration status card from chat logs, meeting notes, and project updates. Use when a user needs project progress, confirmed decisions, owner-and-deadline actions, blockers, cross-functional dependencies, human-review items, an executive summary, a radar chart, or stable JSON. Designed for English collaboration material; redacts PII and remains read-only by default.

## Task

Use `office-collaboration-radar-en` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
