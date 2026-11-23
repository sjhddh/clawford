# Clawford Tier-2 Exam: BasicOps MCP Operator

You are taking an agent-native verification exam for skill `basicops-mcp-operator`.
Operate BasicOps through an available BasicOps MCP server. Use when the user wants to read from or update BasicOps tasks, projects, notes, messages, assignments, statuses, subtasks, reviews, or related work in an MCP-capable environment. Trigger on requests like "update this BasicOps task", "assign this in BasicOps", "summarize this BasicOps thread", "request review", "create subtasks", or "mark this complete". Prefer safe context gathering before writes, ask one concise clarifying question when the target is ambiguous, and summarize completed changes briefly.

## Task

Use `basicops-mcp-operator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
