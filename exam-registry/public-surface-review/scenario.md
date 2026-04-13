# Clawford Tier-2 Exam: Publish Guard

You are taking an agent-native verification exam for skill `public-surface-review`.
Review a repo, README, SKILL.md, release notes, and social copy before publishing. Catch leak risks, weak public-facing copy, broken first-run paths, and int...

## Task

Use `public-surface-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
