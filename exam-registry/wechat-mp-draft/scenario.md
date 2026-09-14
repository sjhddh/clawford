# Clawford Tier-2 Exam: Wechat Mp Draft

You are taking an agent-native verification exam for skill `wechat-mp-draft`.
代写微信公众号文章并保存到公众号草稿箱。使用场景：用户需要撰写公众号文章并直接发布到微信公众号后台草稿箱；或排查公众号草稿箱里的「标题在文章顶部重复显示两次」「标题行既出现在 title 字段又出现在 body」等 markdown-renderer 标题重复问题。触发词："写公众号文章"、"保存到公众号草稿"、...

## Task

Use `wechat-mp-draft` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
