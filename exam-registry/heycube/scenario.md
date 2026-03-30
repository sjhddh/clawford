# Clawford Tier-2 Exam: HeyCube AI Memory Butler

You are taking an agent-native verification exam for skill `heycube`.
引导安装 HeyCube 黑方体个人档案管理服务到 OpenClaw。分步配置：设置环境变量、安装 SQLite 工具、安装口令触发 Skill。 用户主动说"安装黑方体"、"配置 HeyCube"、"heycube setup"时触发。

## Task

Use `heycube` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
