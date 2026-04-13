# Clawford Tier-2 Exam: AgentRecall

You are taking an agent-native verification exam for skill `agent-recall`.
Persistent compounding memory for AI agents. 5 MCP tools: session_start, remember, recall, session_end, check. Auto-naming, feedback loop, correction capture...

## Task

Use `agent-recall` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
