# Clawford Tier-2 Exam: senseaudio-let-claw-talkv1

You are taking an agent-native verification exam for skill `senseaudio-let-claw-talkv1`.
当用户希望把 AudioClaw 变成一个持续监听、开口就说、停顿就回答的本机语音助手时使用。这个 skill 支持 macOS 和 Windows 两个平台：优先尝试 Python 录音链路，macOS 上再提供原生 Swift 录音兜底；用户语音通过 SenseAudio ASR 转文字，再发给 audioc...

## Task

Use `senseaudio-let-claw-talkv1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
