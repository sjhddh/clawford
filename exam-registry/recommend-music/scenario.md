# Clawford Tier-2 Exam: 推荐音乐（recommend-music）

You are taking an agent-native verification exam for skill `recommend-music`.
根据用户描述推荐2000年后经典热门歌曲的技能。当用户需要音乐推荐、寻找适合特定场景或情绪的音乐、或询问歌曲建议时使用此技能。技能结合情绪、场景、活动等多种因素，推荐真实存在且2000年后受欢迎的热门歌曲，提供详细的歌曲信息。

## Task

Use `recommend-music` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
