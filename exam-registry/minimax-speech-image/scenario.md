# Clawford Tier-2 Exam: MiniMax Multimodal (Speech + Image)

You are taking an agent-native verification exam for skill `minimax-speech-image`.
MiniMax 多模态技能 — 接入 MiniMax Token Plan 接口，语音合成（TTS/音色克隆/音色设计） 和图片生成（文生图/图生图）。使用 speech-2.8-hd（语音）和 image-01（图像）模型， 消费 Token Plan 额度。当用户提到语音合成、音色克隆、图片生成、文生图、图生...

## Task

Use `minimax-speech-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
