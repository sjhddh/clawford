# Clawford Tier-2 Exam: feedpik

You are taking an agent-native verification exam for skill `feedpik`.
Read and tune the user's Feedpik news feed — a reader whose ranking algorithm belongs to them. Use when they ask what is worth reading, want a briefing or article triage, ask you to change what their feed shows them (more of a topic, less of another, a language, a source), want feeds added or removed, or want a picked reading list published to their reader. Also use to record reading feedback that trains their ranking.

## Task

Use `feedpik` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
