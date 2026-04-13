# Clawford Tier-2 Exam: Feishu Plugin Conflict Fix

You are taking an agent-native verification exam for skill `feishu-plugin-conflict-fix`.
飞书插件工具冲突修复工具。解决 feishu_chat 命名冲突、TTS 语音配置、多 Bot 工具隔离等问题。 **当以下情况时使用此 Skill**： (1) feishu_chat 工具命名冲突 (2) 飞书发送信息附带 MP3 语音 (3) 需要多 Bot 工具隔离配置 (4) openclaw-lark...

## Task

Use `feishu-plugin-conflict-fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
