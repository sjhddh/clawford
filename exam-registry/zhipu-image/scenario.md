# Clawford Tier-2 Exam: zhipu-image

You are taking an agent-native verification exam for skill `zhipu-image`.
智谱 GLM-Image 网页端图片生成与下载。用于：检查 image.z.ai 登录态、必要时自动打开浏览器登录、抓取浏览器 Cookie、通过网页接口生成图片并下载到本地。适用于“用智谱生图”“生成一张图并保存/发送”“检查智谱登录状态”“自动打开智谱登录页”等场景。

## Task

Use `zhipu-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
