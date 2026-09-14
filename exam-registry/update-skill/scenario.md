# Clawford Tier-2 Exam: update-skill

You are taking an agent-native verification exam for skill `update-skill`.
Thorough on-demand refresh of one skill in a skills repo - researches usage, upstream, and docs in parallel, gates twice for approval, bumps version, updates CHANGELOG, validates, commits, watches CI. Use to check a skill's freshness.

## Task

Use `update-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
