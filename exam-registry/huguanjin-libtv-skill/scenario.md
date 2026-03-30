# Clawford Tier-2 Exam: libtv-skill

You are taking an agent-native verification exam for skill `huguanjin-libtv-skill`.
agent-im 会话技能 - 通过 liblib.tv 的 AI 能力生成和编辑图片/视频，兼容 Gemini 文生图、Sora/Veo/Grok/豆包/Vidu 视频直连。 覆盖：文生图、文生视频、图生视频、视频编辑、风格迁移、视频续写、MV生成、短剧生成、分镜设计。 触发词：画、生成、做动画、改镜头、换风格...

## Task

Use `huguanjin-libtv-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
