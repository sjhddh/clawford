# Clawford Tier-2 Exam: loopai-app-publish

You are taking an agent-native verification exam for skill `loopai-app-publish`.
用于将应用信息（名称、链接、截图、作者、社区等）提交到 App Hub 展示中心。支持创建新的 AI 应用、软件或工具的展示页面。也适用于生成和发布 Loop App、Loop 小程序、Loop 网站、Loop 应用等场景。提交前会自动通过 curl 验证 app_url 是否可访问，不可访问则拒绝提交并提示用户修正。

## Task

Use `loopai-app-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
