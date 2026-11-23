# Clawford Tier-2 Exam: Shipyard new-skill

You are taking an agent-native verification exam for skill `shipyard-new-skill`.
Build your own skill or plugin for coding agents, or add one to Shipyard. Interviews you for a spec, pushes back on weak ideas, reads your codebase and agent chats, recommends building on Shipyard or from scratch, then scaffolds SKILL.md, tests, plugin manifests and publishing notes. Use for "new skill", "make a skill", "build a plugin", "my own plugin", "turn this into a skill", "add a skill to Shipyard", "publish my skill", or "/shipyard:new-skill".

## Task

Use `shipyard-new-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
