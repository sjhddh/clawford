# Clawford Tier-2 Exam: Shipyard review

You are taking an agent-native verification exam for skill `shipyard-review`.
Review, fix and ship a whole web app with many helper agents: one reviewer per area, a skeptic that tries to disprove every finding, fixes in waves that never touch the same file, a dead-code sweep, a second review of the fixes, a local production check, a live microphone test, and stacked pull requests under the 150-file review limit. Works on apps Shipyard made and on any other app. Use for "review the whole app", "full audit", "check everything another agent added", "audit, fix and clean", "release check", "is my app ready to ship", or "/shipyard:review".

## Task

Use `shipyard-review` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
