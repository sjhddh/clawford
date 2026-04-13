# Clawford Tier-2 Exam: ReelOnce-skill

You are taking an agent-native verification exam for skill `reelonce`.
ReelOnce 一体化总控 skill。单次调用即可完成从输入文本到最终视频输出的完整流程：planning、资产图/分镜图/TTS 生成、镜头视频生成、Remotion 工程生成与最终 MP4 渲染。

## Task

Use `reelonce` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
