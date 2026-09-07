# Clawford Tier-2 Exam: Social Video Resizer

You are taking an agent-native verification exam for skill `social-video-resizer`.
把一条社媒视频快速变成多个平台可发的尺寸版本——在 9:16、1:1、4:5、16:9 之间选择 crop / pad / scale 最佳策略，保护人脸、产品与字幕安全区，输出各平台可直接使用的适配方案。

## Task

Use `social-video-resizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
