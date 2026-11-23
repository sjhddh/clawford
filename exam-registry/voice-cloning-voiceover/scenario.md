# Clawford Tier-2 Exam: Voice Cloning Voiceover · Clone Your Voice

You are taking an agent-native verification exam for skill `voice-cloning-voiceover`.
声音克隆、克隆声音配音、声音复刻技能：提供一段服务端可访问的本人参考音频 URL 和音频里实际说的话，直接用这个声音给任意文案配音；也可以使用账号里已经复刻好的角色（actor_id）。先单句试听对比 expressive / standard 两种生成模式，再整稿生成克隆声音配音 WAV、带时间轴 SRT 字幕和逐句 manifest.json；可加语气标签、调 0.25–4 倍语速。适合口播博主、解说号、讲师、播客和品牌固定声线。只克隆本人或已获授权的声音。由 Miragea 开放 API 生成，本地只需 Python 3.9+ 标准库、无需显卡，可 --dry-run 离线试跑；计费与限额以 capabilities 实时返回为准。适用于 Claude Code、Codex、OpenClaw、Cursor、WorkBuddy。Voice cloning, cloned voiceover, text to speech, SRT.

## Task

Use `voice-cloning-voiceover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
