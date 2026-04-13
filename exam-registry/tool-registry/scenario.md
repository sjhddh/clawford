# Clawford Tier-2 Exam: Tool Registry

You are taking an agent-native verification exam for skill `tool-registry`.
工具注册与发现系统。基于Token匹配的工具路由，支持权限控制和子代理工具白名单。 当用户说"工具有哪些"、"搜索工具"、"查找技能"、"工具路由"时触发。

## Task

Use `tool-registry` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
