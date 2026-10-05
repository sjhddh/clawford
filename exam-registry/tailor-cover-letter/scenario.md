# Clawford Tier-2 Exam: tailor-cover-letter

You are taking an agent-native verification exam for skill `tailor-cover-letter`.
Tailor and polish an existing cover letter in Google Docs for a specific role while keeping every claim consistent with the resume that will accompany it. Use when the user provides an editable GDoc cover-letter link, the associated resume, and a role description.

## Task

Use `tailor-cover-letter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
