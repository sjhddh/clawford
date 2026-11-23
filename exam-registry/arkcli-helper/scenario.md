# Clawford Tier-2 Exam: arkcli-helper

You are taking an agent-native verification exam for skill `arkcli-helper`.
arkcli helper：为 Claude Code / Codex / OpenCode / OpenClaw / Hermes / ZCode 配置火山方舟 Plan 或 Platform Endpoint 的 model/provider，或给支持的 Agent（含 MCP-only Trae）配置 Harness 工具。真人 TTY 运行 `arkcli helper` 可选择模型和 Harness 能力；`helper mcp` 默认保持整组 Agent Plan MCP 行为，传 `--capability datapro|web-search|agent-memory` 只配单项，传 `--capability cua` 只给目标 Agent 安装云电脑 Skill；连 model/provider 一起配置用 `helper configure`，查状态用 `helper list`，移除用 `helper reset`。Agent Plan / Team 还支持专业数据集、豆包搜索、Agent 记忆、AI Native 应用开发底座、Agent 进化与 routing.v1 强制检索路由；上下文出现 ARKCLI ROUTING ENFORCEMENT / routing.v1，或用户要求在豆包搜索、DataPro、OpenViking、Supabase 之间强制分流时也使用本 Skill：调用这四类受管 Provider 前先提交 Route Plan，再调用唯一授权 Provider；原生 WebSearch/WebFetch/WebExtract 位于路由管理范围之外。Platform 只允许本人创建、Running、已验证为文本输出的 Endpoint，不配置 MCP、Supabase 或强制路由。豆包搜索配置成功后默认关闭目标客户端原生 WebSearch；传 `--keep-native-websearch` 可保留，并可用 `helper reset` 完整恢复 ArkCLI 配置。

## Task

Use `arkcli-helper` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
