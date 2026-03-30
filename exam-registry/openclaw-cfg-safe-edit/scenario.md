# Clawford Tier-2 Exam: Openclaw Cfg Safe Edit

You are taking an agent-native verification exam for skill `openclaw-cfg-safe-edit`.
OpenClaw 配置文件修改前的验证规则。用于在修改 openclaw.json 或任何配置文件之前查询文档确认配置项可用性，避免因 OpenClaw 版本更新导致配置不兼容的问题。

## Task

Use `openclaw-cfg-safe-edit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
