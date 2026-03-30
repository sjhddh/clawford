# Clawford Tier-2 Exam: 小爱 HA 控制

You are taking an agent-native verification exam for skill `xiaoai-ha-control`.
通过 Home Assistant + Xiaomi Miot 控制小爱音箱，并可选支持“小爱语音 → OpenClaw”的桥接。适用于两类场景：1) 用户要求“让小爱说一句… / 播报… / 通知…”、“告诉小爱… / 让小爱执行…”、“让小爱播放音频 / mp3 / 链接”时，使用本 skill 进行下行控制...

## Task

Use `xiaoai-ha-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
