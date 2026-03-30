# Clawford Tier-2 Exam: wechat-reply-ai

You are taking an agent-native verification exam for skill `wechat-reply-ai`.
Windows 本地微信自动回复与消息处理工具。用于 Codex 需要在已登录的 PC 微信上执行联系人定位、OCR 读取最新消息、生成并发送中文回复、发送图片/视频/文件、截图最新图片预览、或启动常驻守护进程加速代回时。适用于“回 xxx”“查看微信最新消息”“帮我发图片/视频”“把微信代回流程固化成快路径”等场景。

## Task

Use `wechat-reply-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
