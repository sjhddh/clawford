# Clawford Tier-2 Exam: architect-project-state

You are taking an agent-native verification exam for skill `architect-project-state`.
Maintain a versioned, source-traceable architectural project brief, decision state, change log, open-question register, and bounded task pool. Use when ingesting design briefs, client meeting notes, consultant feedback, planning conditions, or later revisions; when updating project state without overwriting history; or when handing the project to another architect or Agent. Do not use merely to generate design ideas or imitate an architect's style.

## Task

Use `architect-project-state` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
