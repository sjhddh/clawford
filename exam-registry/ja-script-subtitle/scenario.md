# Clawford Tier-2 Exam: ja-script-subtitle

You are taking an agent-native verification exam for skill `ja-script-subtitle`.
日语有声作品（ASMR / 音声 / 同人音声）字幕流水线：把「日文台本 + 音频」做成 日文原文 / 纯中文 / 双语 SRT，可选烧录中文竖屏视频。 当用户提供日语台本(txt)配音频(mp3/wav)、或要求「配字幕 / 做中文字幕 / 生成 SRT / 烧录中文视频 / 把台本和音对上时间轴」时使用。 无台本、只有音频时也可用（退化为纯 ASR 转写 + 人工翻译），但精度低于有台本。 NOT for: 视频字幕的图形化编辑、非日语语种、音乐歌词校对。

## Task

Use `ja-script-subtitle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
