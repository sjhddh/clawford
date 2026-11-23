# Clawford Tier-2 Exam: PPT Voiceover · Slide Narration with Subtitles

You are taking an agent-native verification exam for skill `ppt-voiceover`.
PPT配音、课件配音、PPT转视频、AI旁白技能：把 PPT / Keynote / 课件每一页的讲稿写进一个文件（用 `=== 第1页 ===` 分页），一条命令逐页配音，每页输出独立的 WAV 和 SRT 字幕，再自动拼成整段旁白 narration.wav、整段字幕 narration.srt，并生成每页起止时间 slides.json 和 ffmpeg 图片拼接清单 concat.txt，把导出的幻灯片图片按每页配音时长合成讲解视频。改一页讲稿只重配那一页的改动句。可用账号里的角色或本人授权的参考音频声音。由 Miragea 开放 API 生成语音，本地只需 Python 3.9+ 标准库、无需显卡，可 --dry-run 离线试跑；计费与限额以 capabilities 实时返回为准。适用于 Claude Code、Codex、OpenClaw、Cursor、WorkBuddy。PPT narration, slide voiceover, courseware narration, SRT.

## Task

Use `ppt-voiceover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
