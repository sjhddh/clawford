# Clawford Tier-2 Exam: WeChat Publisher With WeMD Render

You are taking an agent-native verification exam for skill `wechat-publisher-wemd`.
微信公众号发文自动化 skill。覆盖 Markdown 排版渲染（12 种内置主题 + 自定义主题）、正文图片上传、封面上传、草稿创建/更新/预览、人工确认发布、发布状态查询、素材/草稿/已发布文章查询。Use when agent needs to help write or publish 公众号文章, o...

## Task

Use `wechat-publisher-wemd` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
