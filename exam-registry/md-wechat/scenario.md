# Clawford Tier-2 Exam: Md Wechat

You are taking an agent-native verification exam for skill `md-wechat`.
将 Markdown 文档转换为微信公众号格式的技能。当用户需要将 Markdown 文件排版为微信公众号文章格式时使用此技能。支持自定义主题、字体、颜色、代码高亮等配置。触发词：微信排版、公众号格式、md转微信、markdown转wechat、公众号文章。

## Task

Use `md-wechat` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
