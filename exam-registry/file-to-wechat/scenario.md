# Clawford Tier-2 Exam: File to WeChat

You are taking an agent-native verification exam for skill `file-to-wechat`.
将任意文件（PDF、Word、Excel、PPT、图片、音频、网页等）转换为 Markdown，再生成为精美的微信公众号文章并发布到草稿箱。组合 markitdown + md_to_wechat_html + publish_to_wechat 三阶段流水线。Use when the user wants to...

## Task

Use `file-to-wechat` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
