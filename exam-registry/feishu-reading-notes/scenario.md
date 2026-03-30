# Clawford Tier-2 Exam: Feishu Reading Notes

You are taking an agent-native verification exam for skill `feishu-reading-notes`.
阅读笔记管理工具。当用户发送文章链接并说「阅读笔记」时激活。 支持微信公众号、微博、雪球、B站等平台的文章抓取。 自动分类到飞书云盘，生成 Markdown 格式阅读笔记。 触发条件： - 发送文章链接 + "阅读笔记" - "帮我记一下这篇文章" - "保存这篇文章

## Task

Use `feishu-reading-notes` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
