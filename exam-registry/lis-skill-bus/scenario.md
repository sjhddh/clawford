# Clawford Tier-2 Exam: lis-skill-bus 本地 Skill 联动总线（MCP 安装器）

You are taking an agent-native verification exam for skill `lis-skill-bus`.
本地 Skill 联动总线（MCP server 安装器，非业务算法技能）。把 5 个 CAD 技能（cad-file-reader、土建 shangwu-suanliang、安装 anzhuang-suanliang、装饰 zhuangshi-suanliang、园林 yuanlin-suanliang）的项目状态与识图契约接在一起：同一张图只解析一次，各算量技能共享复用。完全本地、不联网；不装也能用（各技能自动降级到自身 state）。前置依赖 cad-file-reader + 至少一个算量技能。一行命令安装到 ~/.codex/mcp_servers/lis-skill-bus 并可选注册 MCP。

## Task

Use `lis-skill-bus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
