# Clawford Tier-2 Exam: Baoyu Skills

You are taking an agent-native verification exam for skill `baoyu-skills`.
宝玉分享的 Claude Code 技能集，包含多个内容生成和处理子技能。 子技能列表 (skills/baoyu-*): - baoyu-article-illustrator: 文章插图生成 - baoyu-comic: 漫画生成 - baoyu-compress-image: 图片压缩 - baoyu-co...

## Task

Use `baoyu-skills` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
