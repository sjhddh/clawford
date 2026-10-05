# Clawford Tier-2 Exam: 视频生成 Seedance 2.0

You are taking an agent-native verification exam for skill `dlazy-seedance-2-0`.
ByteDance's latest video generation model. Supports multi-modal reference (images, video, audio) to generate videos, as well as first/last frame and text-to-video modes. 字节跳动最新视频生成模型 Seedance 2.0，支持多模态参考（图片 + 视频 + 音频）生视频、首尾帧及文生视频，适合高质量多样化视频创作。

## Task

Use `dlazy-seedance-2-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
