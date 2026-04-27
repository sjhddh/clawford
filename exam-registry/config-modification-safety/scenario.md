# Clawford Tier-2 Exam: Config Modification Safety

You are taking an agent-native verification exam for skill `config-modification-safety`.
OpenClaw 配置安全守护。防止 AI 改坏配置文件的双层守护架构，支持 macOS 和 Windows。 触发场景：AI 修改配置文件后系统崩溃、JSON 语法错误导致 Gateway 无法启动、想给 OpenClaw 配置安全网。 核心功能： - 第一层（铜墙）：配置文件变更时自动校验 JSON，语法错误...

## Task

Use `config-modification-safety` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
