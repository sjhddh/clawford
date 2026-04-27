# Clawford Tier-2 Exam: chatppt-agent

You are taking an agent-native verification exam for skill `chatppt-agent`.
使用 ChatPPT CLI 命令行工具通过 AI 自动生成 PPT 演示文稿。适用场景：用户需要根据主题文字或现有文件（Word/PDF/Markdown）生成 PPT 时触发本 skill。支持登录认证、PPT 生成、文件导入生成、结果查询等完整流程。

## Task

Use `chatppt-agent` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
