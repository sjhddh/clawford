# Clawford Tier-2 Exam: tech-to-skill

You are taking an agent-native verification exam for skill `tech-to-skill`.
Distills technical long-form content (engineering notes, papers, project docs) into agent-callable skills with evidence indexing and temporal tracking. Use when the user wants to convert a technical article, paper, or project documentation into reusable skills that preserve engineering detail and tr

## Task

Use `tech-to-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
