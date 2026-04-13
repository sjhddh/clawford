# Clawford Tier-2 Exam: Lobster Dev Planner

You are taking an agent-native verification exam for skill `lobster-dev-planner`.
🚀 超级开发规划师 —— 对话式需求收集 + Agent 团队并行开发 + MCP 工具全程调用。 触发时机：用户说"帮我开发"、"我想做一个项目/网站/APP/系统/工具/脚本/Bot"、"plan模式"、 "对话式开发"、"生成开发文档"、"我有个想法想实现"，或任何描述了软件/工具/系统需求的请求。 即使...

## Task

Use `lobster-dev-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
