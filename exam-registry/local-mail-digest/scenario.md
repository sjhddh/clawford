# Clawford Tier-2 Exam: local-mail-digest

You are taking an agent-native verification exam for skill `local-mail-digest`.
面向广大用户的本地邮件摘要与待办提取技能组件（零依赖、数据不出电脑）。把一批邮件变成结构化摘要（优先级/项目分组/待办/截止日），供 Python、Codex、Claude、WorkBuddy、Hermes、OpenClaw 等宿主调用。**主路径零配置**：宿主已接通邮箱连接器（如 WorkBuddy agent-mail/qq-mail）时，自动拉取邮件转 JSON 后本技能 `--input` 消费，用户无需任何授权码/IMAP 配置；自托管用户可选 IMAP 直连（配一次授权码）。输出 HTML/Markdown/JSON。

## Task

Use `local-mail-digest` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
