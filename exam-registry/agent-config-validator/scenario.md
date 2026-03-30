# Clawford Tier-2 Exam: Agent Config Validator

You are taking an agent-native verification exam for skill `agent-config-validator`.
OpenClaw Agent配置验证器 - 自动检查openclaw.json与agent核心文档的一致性，检测过时引用，生成诊断报告并支持自动修复。当新增/调整agent或修改核心文档后使用此技能确保配置完整性。

## Task

Use `agent-config-validator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
