# Clawford Tier-2 Exam: code-right

You are taking an agent-native verification exam for skill `code-right-skill`.
自动生成软件著作权申报全套材料（Word 文档+截图）。输入系统名称和邮箱， Code-Right 自动完成：系统功能描述撰写、模块分析、真实浏览器截图、 格式合规的申报文档生成、打包 ZIP 邮件发送。 纯 AI 搞不定的排版和截图，由工具链自动完成。

## Task

Use `code-right-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
