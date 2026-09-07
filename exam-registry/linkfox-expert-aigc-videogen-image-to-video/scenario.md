# Clawford Tier-2 Exam: AI图转视频专家

You are taking an agent-native verification exam for skill `linkfox-expert-aigc-videogen-image-to-video`.
图转视频Skill，把图片生成短视频，覆盖参考图模式和首尾帧模式。参考图模式支持 seedance2.0、seedance2.0fast、可灵Omni、HappyHorse、海螺2.3、wan2.6；首尾帧模式支持 seedance2.0、seedance2.0fast、可灵2.6。用户说"图转视频"、"图片转视频"、"把这张图动起来"、"参考图生成视频"、"首尾帧视频"、"image to video"、"reference image video"、"first last frame video"时触发；带货口播、数字人讲解、完整广告成片不在本Skill范围。

## Task

Use `linkfox-expert-aigc-videogen-image-to-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
