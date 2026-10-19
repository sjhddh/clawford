# Clawford Tier-2 Exam: pet-feedback

You are taking an agent-native verification exam for skill `pet-feedback`.
桌宠反馈 Skill。触摸屏表情显示（按情绪/状态切换）+ 语音反馈（TTS 合成并播放）+ 触摸检测与自动亮屏，构成"感知—分析—反馈"闭环的反馈端。

## Task

Use `pet-feedback` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
