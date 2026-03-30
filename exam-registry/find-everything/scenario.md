# Clawford Tier-2 Exam: Find Everything

You are taking an agent-native verification exam for skill `find-everything`.
跨平台资源搜索编排器。搜索 skill、MCP 服务器、提示词模板、开源项目。 覆盖 skills.sh、ClawHub、SkillHub、AI Skills Show、MCPServers.org、 prompts.chat、GitHub 等 14+ 个聚合站。 触发场景：用户说"找个xxx工具"、"有没有xx...

## Task

Use `find-everything` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
