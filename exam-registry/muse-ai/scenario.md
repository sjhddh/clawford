# Clawford Tier-2 Exam: Release

You are taking an agent-native verification exam for skill `muse-ai`.
AI 音乐创作助手 — 通过对话生成原创歌曲、纯音乐和 BGM。 当用户想要创作、生成、制作任何形式的音乐时使用此技能。 包括：生成带人声的歌曲、写歌词、作曲编曲、制作纯音乐/BGM/配乐，或将文字变成歌曲。 当用户提到具体音乐风格（如"来首民谣""做首说唱"）时也应触发。 支持三种模式：灵感模式（一句话生成）、...

## Task

Use `muse-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
