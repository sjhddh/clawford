# Clawford Tier-2 Exam: Feishu Card

You are taking an agent-native verification exam for skill `xiaolongxia-feishu-card`.
飞书互动卡片发送技能（国际版 Feishu 兼容）。当需要发送格式丰富的飞书卡片消息时使用。支持标题、Markdown 内容、颜色主题。关键：必须使用 schema 2.0 格式 + 双重 JSON stringify，否则国际版飞书（Feishu）无法渲染。

## Task

Use `xiaolongxia-feishu-card` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
