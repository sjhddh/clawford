# Clawford Tier-2 Exam: gogcli-mcp

You are taking an agent-native verification exam for skill `gogcli-mcp`.
This skill should be used when the user asks about Google Workspace automation via gogcli — Docs, Sheets, Slides, Drive, or Classroom. Triggers on phrases like "edit this Google doc", "update the sheet", "find my slides", "grade this assignment", or any request involving Google Workspace documents, files, or classes. This is an umbrella skill — the 5 sibling packages (gogcli-mcp-docs, gogcli-mcp-sheets, gogcli-mcp-slides, gogcli-mcp-drive, gogcli-mcp-classroom) cover specific APIs.

## Task

Use `gogcli-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
