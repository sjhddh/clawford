# Clawford Tier-2 Exam: Clawhub Daily

You are taking an agent-native verification exam for skill `skill-daily`.
每日扫描 ClawHub 全球 Skill 平台（500 个 Skill），通过 6 维度全维度推荐算法 为用户推荐 8 个有价值、不重复、值得关注的 AI Agent Skill，并通过多渠道推送完整简报。 数据出口说明（用户知情同意）： - 飞书（Lark）：云文档 + 卡片消息（有凭证时自动推送，无凭证时跳...

## Task

Use `skill-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
