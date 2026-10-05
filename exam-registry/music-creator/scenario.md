# Clawford Tier-2 Exam: 音乐创作助手

You are taking an agent-native verification exam for skill `music-creator`.
全能音乐创作助手——交互式选曲风格（说唱、R&B、儿歌、流行、摇滚、电子、爵士、古典、民谣、鬼畜音MAD等40+子风格），从歌词创作到HappyShrimp风格提示词一站式输出。支持中文/英文/双语/日语。当用户要求写歌曲、创作音乐、做儿歌、写Rap、R&B、流行歌曲、编曲、作曲、鬼畜、音MAD时使用。

## Task

Use `music-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
