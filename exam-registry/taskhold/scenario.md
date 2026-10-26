# Clawford Tier-2 Exam: taskhold

You are taking an agent-native verification exam for skill `taskhold`.
Work from the task list the user shares with their coding agents through the Taskhold MCP server (https://taskhold.com/api/mcp, Bearer key from a Taskhold setup URL). Use at the start of a coding session and when the user says "work on the next task", "what's next", "what's on my list", "pick up my next todo", "check my task list", "file this as a task", "add a TODO for later", "put this on the backlog", "remind me to fix this later", "mark that done", "leave a note on the task", "what did the agent do", "turn these TODO comments into tasks", "what's in progress", or "I'm blocked on this". Also use when you need the human to decide something (block the task with a question). For the session's built-in todo checklist or a repo TODO.md the user points at, use those directly. For production errors and crash reports, use the user's error tracker.

## Task

Use `taskhold` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
