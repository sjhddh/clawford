# Clawford Tier-2 Exam: OpenClaw Gemini Web

You are taking an agent-native verification exam for skill `openclaw-gemini-web`.
当用户希望 OpenClaw 通过 Gemini 网页版完成通用浏览器交互时使用，包括登录、续接或分叉 Gemini 线程、上传文件给 Gemini 分析、向 Gemini 提问、起草或总结内容，以及生成可下载图片。

## Task

Use `openclaw-gemini-web` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
