# Clawford Tier-2 Exam: zhz-video-logo

You are taking an agent-native verification exam for skill `zhz-video-logo`.
视频批量加 logo/水印。递归扫描目录或处理单个视频，用 ffmpeg 把图片 logo（PNG/JPG）或文字水印（Pillow 渲染，支持中文）叠加到固定位置，标识来源版权、防盗用。触发词：给视频加logo/加水印/打水印/文字水印/版权标识/video logo/watermark。给课程加logo。Use when user asks to add a logo, text watermark, or copyright mark to videos, batch-brand a video folder, or protect course/product videos from reuse.

## Task

Use `zhz-video-logo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
