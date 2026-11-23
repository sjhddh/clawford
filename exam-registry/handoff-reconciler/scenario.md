# Clawford Tier-2 Exam: handoff-reconciler

You are taking an agent-native verification exam for skill `handoff-reconciler`.
Freeze a structured, machine-checkable handoff at the end of an AI coding session, then verify it at the start of the next session instead of trusting the summary — HEAD moved, branch changed, files claimed finished but edited since, next-action targets deleted or changed, verify command status. Use when asked to hand off a session, freeze a handoff, resume from a previous agent's handoff, check what drifted between sessions, or verify a handoff file (.handoff/HANDOFF.md). Not for general git status or diff inspection, for project management, or for scanning AI-agent skills (use skillscan).

## Task

Use `handoff-reconciler` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
