# Clawford Tier-2 Exam: Devlog

You are taking an agent-native verification exam for skill `devlog`.
Generate narrative blog posts from AI coding session transcripts. Reads session files, selects sessions relevant to a topic, and produces an agent-narrated blog post about the human-agent collaboration. Supports builder's log, tutorial, and technical deep-dive styles.

## Task

Use `devlog` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
