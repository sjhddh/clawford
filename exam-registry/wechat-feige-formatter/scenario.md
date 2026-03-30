# Clawford Tier-2 Exam: Wechat Feige Formatter

You are taking an agent-native verification exam for skill `wechat-feige-formatter`.
公众号排版工具。用户提供任意格式的文章内容（草稿、纯文字、已有 Markdown 均可）， AI 自动识别结构、添加排版标记，生成专业公众号 HTML。 Use when: 用户说"帮我排版"、"转成公众号格式"、"生成 HTML"；用户上传文章内容或文件 NOT for: 纯文本渲染；用户只想预览已有 HTML

## Task

Use `wechat-feige-formatter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
