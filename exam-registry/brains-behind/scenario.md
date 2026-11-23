# Clawford Tier-2 Exam: brains-behind

You are taking an agent-native verification exam for skill `brains-behind`.
Connect to Brains Behind, the shared brain of a company or a person (who they are, goals, tone, rules, notes, people and every conversation with them, meetings), over MCP. Keep what you learn there (remember), look things up before you answer (recall), take the whole brain (export_brain). Use when the user asks to connect Brains Behind, to save something to their brain, or to look up a person, a company fact or something agreed.

## Task

Use `brains-behind` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
