# Clawford Tier-2 Exam: Sonos 音乐点播

You are taking an agent-native verification exam for skill `sonos-music-playback`.
面向中文用户的 Sonos 音乐点播技能。支持通过 Sonos 侧搜索加队列起播的方式播放已绑定音乐服务，当前已验证兼容 网易云音乐 和 QQ音乐。通过 SoCo 将搜索结果转成 Sonos 队列项，再从队列起播，以保留 Sonos App 中的标题、歌手、专辑和封面等 metadata。

## Task

Use `sonos-music-playback` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
