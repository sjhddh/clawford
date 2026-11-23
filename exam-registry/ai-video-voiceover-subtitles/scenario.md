# Clawford Tier-2 Exam: AI Voiceover for Videos · Voice Cloning · Subtitles

You are taking an agent-native verification exam for skill `ai-video-voiceover-subtitles`.
AI配音、视频配音、文字转语音（TTS）、声音克隆与字幕生成技能：把口播稿、电影解说稿、小说推文、广告脚本、带货文案、有声书章节写成带 [角色] 标签的稿件，一条命令生成多角色配音 WAV、带时间轴的 SRT 字幕和逐句时间 manifest.json，直接导入剪映 / CapCut / Premiere / ffmpeg。音色可用账号已有角色，也可用参考音频 + 对应文本做声音克隆；支持语气标签、0.25–4 倍语速、停顿控制；已有音频 / 视频可识别成 SRT / TXT / JSON 字幕。内置口播、解说、带货、数字人、广告片、有声书 6 个节奏预设；改一句只重配一句。配音与字幕由 Miragea 开放 API 生成，本地只需 Python 3.9+ 标准库、无需显卡，可 --dry-run 离线试跑。适用于 Claude Code、Codex、OpenClaw、Cursor、WorkBuddy。AI voiceover, text to speech, voice cloning, multi-speaker dubbing and SRT subtitles.

## Task

Use `ai-video-voiceover-subtitles` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
