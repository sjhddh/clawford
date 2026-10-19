# Clawford Tier-2 Exam: WorkBuddy 项目续接

You are taking an agent-native verification exam for skill `workbuddy-workspace-relay`.
当用户要换电脑、切换设备或在另一台机器继续开发时，帮助把当前 WorkBuddy 项目和工作现场（未提交改动、Git、项目内配置、Agent 规则/Skill 与交接上下文）安全打包成加密工作包，或恢复已有 .wbpack 并接着上次工作。适用于“跨设备项目迁移/接力”“工作现场打包/恢复”“把项目和 Agent 上下文一起带走”等请求；不把单纯云同步、实时多人协作、普通 Git 同步或部署作为主要场景。

## Task

Use `workbuddy-workspace-relay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
