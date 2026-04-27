# Clawford Tier-2 Exam: 二哥的配置文件修改指南

You are taking an agent-native verification exam for skill `config-safe-edit`.
安全修改配置文件的系统性流程。当需要修改 openclaw.json、models.json、或其他任何系统配置文件时激活。核心价值：改前备份 + 版本对比 + 确认差异后再操作。适合：（1）修改任何配置文件前；（2）升级后出现异常需要溯源；（3）无法确认某字段来源时；（4）用户要求验证配置变化时。避免因配置错误...

## Task

Use `config-safe-edit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
