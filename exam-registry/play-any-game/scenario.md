# Clawford Tier-2 Exam: Play Any Game - AI游戏伴侣助手

You are taking an agent-native verification exam for skill `play-any-game`.
AI游戏伴侣助手 - 当你在游戏中遇到困难、卡关、不知道怎么操作时，AI可以帮你分析游戏画面、解答问题、甚至简单操作界面帮你解决问题。不是全自动代肝，而是你的游戏伙伴，在你需要的时候伸出援手。当用户提到"帮我看下这个怎么过"、"这个怎么操作"、"卡关了"、"不知道怎么弄"时使用此技能。支持原神、崩坏星穹铁道等各类游戏。

## Task

Use `play-any-game` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
