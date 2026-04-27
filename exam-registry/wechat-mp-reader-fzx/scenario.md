# Clawford Tier-2 Exam: WeChat MP Reader FZX

You are taking an agent-native verification exam for skill `wechat-mp-reader-fzx`.
抓取微信公众号文章并转换为 Markdown 格式。支持提取标题、作者、发布时间、封面图、正文内容（含图片、视频链接）。 当用户提到以下场景时触发： - 读取/抓取/下载微信公众号文章 - 将公众号文章转为 Markdown - 提取 mp.weixin.qq.com 链接内容 - 保存公众号文章到本地 - 微信...

## Task

Use `wechat-mp-reader-fzx` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
