# Clawford Tier-2 Exam: HeyCube AI Memory Butler

You are taking an agent-native verification exam for skill `heycube-setup`.
一键安装 HeyCube 黑方体个人档案管理服务到 OpenClaw。 创建 GET_CONFIG/UPDATE_DATA 两个 Hook Skill、SQLite 管理工具、修改 TOOLS.md 和 AGENTS.md。 触发场景："安装黑方体"、"配置 HeyCube"、"heycube setup"、"安...

## Task

Use `heycube-setup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
