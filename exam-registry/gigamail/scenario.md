# Clawford Tier-2 Exam: GigaMail

You are taking an agent-native verification exam for skill `gigamail`.
Email and calendar for your OpenClaw agent through the GigaMail MCP server — read, search, draft, reply, schedule — with every destructive action (send, delete, calendar write) held for out-of-band human approval that the agent cannot grant itself. 给你的 OpenClaw 代理一个真实邮箱和日历：读信、搜索、起草自由，发送与删除必须由人带外批准，代理无法批准自己。

## Task

Use `gigamail` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
