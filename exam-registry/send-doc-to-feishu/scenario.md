# Clawford Tier-2 Exam: Send Doc To Feishu

You are taking an agent-native verification exam for skill `send-doc-to-feishu`.
将本地文档（Word/Excel/PDF 等）发送给飞书用户或群聊。处理飞书 IM 消息发送的完整流程、权限卡点排查与降级方案。 当用户说"发给我""发到飞书""通过飞书发送""发给某人/某群"时触发。

## Task

Use `send-doc-to-feishu` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
