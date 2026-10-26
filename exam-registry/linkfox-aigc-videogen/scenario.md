# Clawford Tier-2 Exam: AIGC视频生成

You are taking an agent-native verification exam for skill `linkfox-aigc-videogen`.
AI生视频工具（首尾帧/单图模式），根据原图和提示词生成视频，支持可选尾帧图控制结束画面。支持模型KLING可灵/WAN万相/SEED豆包/SEED_FAST/HAILUO海螺。用户说"生成视频"、"AI视频"、"图生视频"、"做个视频"、"video generation"、"generate video"、"图片转视频"、"动态视频"时触发。

## Task

Use `linkfox-aigc-videogen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
