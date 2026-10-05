# Clawford Tier-2 Exam: project-doc

You are taking an agent-native verification exam for skill `project-doc-skill`.
Create or maintain a PROJECT.md source-of-truth doc for any project, quiz-first with project-type branches. Use only when the user explicitly asks for project documentation.

## Task

Use `project-doc-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
