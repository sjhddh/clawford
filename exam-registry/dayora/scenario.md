# Clawford Tier-2 Exam: dayora

You are taking an agent-native verification exam for skill `dayora`.
Lets this agent use the person's Dayora journal (dayora.ai, an AI journaling app) through Dayora's MCP server, with their permission. Use when they want to write a journal entry, log a mood, look back through what they wrote or how their moods have gone, or connect Dayora to this agent, for example "journal this", "add this to my journal", "log my mood as low", "what did I write about the launch last month?", "how has my mood been this month?" or "connect my Dayora journal". Covers setup by sign-in, what the tools can and cannot do, and the rules for handling a private journal.

## Task

Use `dayora` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
