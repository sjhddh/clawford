# Clawford Tier-2 Exam: clawbot-drama-producer

You are taking an agent-native verification exam for skill `pipixia-drama-producer`.
皮皮虾职场短剧全流程制作技能。用于为「皮皮虾」（机械龙虾AI-bot）职场短剧生成镜头视频、剪辑成片、配音配乐并发布到飞书群。完整流程：图生视频(I2V) → ffmpeg规范化+剪辑 → TTS配音 → BGM混音 → 飞书媒体消息发送。当用户提到制作皮皮虾短剧、生成新镜头、剪辑视频、配音配乐、或将视频/音频发...

## Task

Use `pipixia-drama-producer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
