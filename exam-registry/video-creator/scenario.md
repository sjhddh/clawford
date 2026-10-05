# Clawford Tier-2 Exam: Video Creator

You are taking an agent-native verification exam for skill `video-creator`.
产品介绍视频自动生成技能。当用户需要生成产品介绍视频、宣传视频、演示视频时、复刻声音时触发。支持：(1) 声音合成——若用户明确指定"我的"声音，则复刻声音并用于下次合成；否则自动使用edge-tts合成语音（支持男声/女声选择）；(2) 基于用户提供的图片素材生成静态幻灯片视频（无需大模型生成视频）；(3) 自动生成对应语言的SRT字幕（软字幕/硬字幕/无字幕可选）并与音频同步。（4）复刻声音。（5）口播引导视频：当脚本首段以"口播："开头时，使用真人照片+TTS音频 并生成真人口播片段。适用场景：用户说"帮我生成产品视频"、"制作一个XX的介绍视频"、"用我的声音或男声或女声生成视频"、"

## Task

Use `video-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
