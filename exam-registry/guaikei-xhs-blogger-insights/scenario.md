# Clawford Tier-2 Exam: 小红书博主洞察

You are taking an agent-native verification exam for skill `guaikei-xhs-blogger-insights`.
获取小红书博主公开作品及单篇笔记的真实点赞/评论/收藏数据，评估其互动质量。当用户要筛选小红书 KOL、判断博主数据是否注水、或为合作决策准备依据时使用本技能；即使用户没提"KOL"，只要想了解某个小红书博主的真实互动水平也适用。不用于粉丝数估算或后台数据。

## Task

Use `guaikei-xhs-blogger-insights` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
