# Clawford Tier-2 Exam: 多平台生成视频导演

You are taking an agent-native verification exam for skill `multi-platform-video-director`.
多平台生成视频导演技能。将一张或多张参考图片或文字描述转化为可执行的视频方案、平台适配 Prompt、负向 Prompt、分镜设计、运动参数，并在有可用视频生成工具时直接生成视频。适用于：图生视频、文生视频、图片转视频、海报动效、首尾帧视频、产品展示动画、人物照片动态化、节日宣传视频、社交媒体短视频、电影感镜头运动、视频配乐、语气词配音、字幕叠加、多镜头拼接，以及提到 Runway、Kling/可灵、即梦/Jimeng、Higgsfield、Pika、Luma、Hailuo/海螺、Veo 等平台的请求。根据画面内容与用户目标自动选择或排序平台，不强制指定单一提供商。注意：本技能仅处理视频生成，不处理图片生成（用 ImageGen）、3D模型或模板特效（用3D模型与视频特效技能）。

## Task

Use `multi-platform-video-director` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
