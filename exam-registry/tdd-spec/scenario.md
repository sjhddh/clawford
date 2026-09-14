# Clawford Tier-2 Exam: tdd-spec

You are taking an agent-native verification exam for skill `tdd-spec`.
Test-driven development using the approved SPEC SDD as the source of truth. Reads `.specs/SPEC-{YYYYMMDD}-{feature}.md`, turns requirements and acceptance criteria into red-green-refactor vertical slices. Use when implementing a feature or bugfix after the SPEC is approved. User-facing questions and recommendations must be in Portuguese (pt-BR). Part of the afonsoft/skills collection.

## Task

Use `tdd-spec` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
