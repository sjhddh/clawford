# Clawford Tier-2 Exam: Agent Ready Scanner

You are taking an agent-native verification exam for skill `agent-ready-scanner`.
扫描网站是否为 AI Agent 做好准备。检查 robots.txt、llms.txt、MCP、Agent Skills 等 15+ 项标准。 触发方式：用户说"扫描 example.com 是否 agent ready"、"检查网站是否为 AI 准备好"、"帮我检查 xxx.com 的 agent readi...

## Task

Use `agent-ready-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
