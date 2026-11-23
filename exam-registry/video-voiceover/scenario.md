# Clawford Tier-2 Exam: 视频配音生成

You are taking an agent-native verification exam for skill `video-voiceover`.
把带时间戳的 narration.json 合成为中文解说音频。使用 MiMo TTS（mimo-v2.5-tts）或 Fish Audio（s2.1-pro-free）或显式配置的通用 IndexTTS HTTP 服务逐段生成语音， 按时间窗动态适配语速并处理响度；输入输出时间线上的旁白，产出 tts_segments 与 tts_meta.json。 外发说明：每段旁白文字会发给所选 TTS 服务（MiMo / Fish Audio / 用户自托管的 IndexTTS），--voice-ref 的参考音频会发给 MiMo。 另含实验性的英译中 dub 路径：只在显式选择 dub 模式并传 --confirm-voice-rights 时运行，会把源视频音频发到 MiMo ASR， 并以原说话人的声音为参考经 MiMo voiceclone 克隆配音；只可用于用户有权使用、且说话人同意被克隆声音的内容。 触发词：配音、语音合成、TTS、解说配音、 voiceover、text to speech、旁白配音。

## Task

Use `video-voiceover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
