# Clawford Tier-2 Exam: Blog Writer

You are taking an agent-native verification exam for skill `astralwave-blog`.
为张向阳（Astral Wave）的个人博客 astralwaveorg 生成高质量技术博客文章。当用户说"写博客xxx"、"帮我写一篇xxx"、"引用消息写成博客"、"总结今天聊天"，或者 cron 触发每日聊天总结时，使用此技能。文章风格必须模拟作者本人：用工程师第一人称视角，诚实直接，有踩坑说踩坑，读起来像...

## Task

Use `astralwave-blog` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
