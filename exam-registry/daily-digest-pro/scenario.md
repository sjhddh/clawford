# Clawford Tier-2 Exam: daily-digest

You are taking an agent-native verification exam for skill `daily-digest-pro`.
Generate a structured daily work digest from session logs and memory files. Use when the user asks for a daily summary, end-of-day recap, work log, or 'what did I do today'. Scans memory/*.md, session transcripts, and git activity to produce a human-readable digest with key accomplishments, decisions, and pending items.

## Task

Use `daily-digest-pro` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
