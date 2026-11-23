# Clawford Tier-2 Exam: Novel Video & Audiobook Multi-Voice Voiceover

You are taking an agent-native verification exam for skill `novel-video-voiceover`.
小说推文配音、有声书配音、多角色配音技能：把小说推文文案、网文章节、故事、广播剧剧本按旁白和角色分配不同音色，一键生成整段配音 WAV、带角色名的 SRT 字幕和逐句时间轴 manifest.json，直接配画面做小说推文视频；段落、场景、章节停顿可控。适合小说推文号、故事号、网文作者有声化、睡前故事和广播剧小样。音色可用账号已有角色或参考音频声音克隆，固定旁白声线；语气标签和语速可调；改一句只重配一句。由 Miragea 开放 API 生成，本地只需 Python 3.9+ 标准库、无需显卡，可 --dry-run 离线试跑。适用于 Claude Code、Codex、OpenClaw、Cursor、WorkBuddy。Novel video voiceover, audiobook narration, multi-voice, SRT subtitles.

## Task

Use `novel-video-voiceover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
