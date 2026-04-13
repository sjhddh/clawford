# Clawford Tier-2 Exam: Feishu Mood Music

You are taking an agent-native verification exam for skill `feishu-mood-music`.
飞书音乐心情伴侣。识别用户的情绪状态，生成匹配的治愈/陪伴音乐并发送到飞书群。 三级触发机制： (1) 显式触发（直接要歌）："来首歌"、"想听歌"、"来首应景的"、"音乐治愈"、"解压音乐"、"放首歌" (2) 半隐式触发（情绪词 + @机器人）："心情不好"、"有点累"、"好烦"、"需要放松"、"emo了"、...

## Task

Use `feishu-mood-music` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
