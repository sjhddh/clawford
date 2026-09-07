# Clawford Tier-2 Exam: androidiconmaker

You are taking an agent-native verification exam for skill `androidiconmaker`.
将任意图片（JPG/PNG）转换为 Android 应用图标（mipmap 格式），自动裁剪为圆形并生成 mdpi/hdpi/xhdpi/xxhdpi/xxxhdpi 全套分辨率。触发场景：用户发了一张图片并说「做成 App 图标」「把这个设为应用图标」「生成安卓图标」「做个图标吧」「图片转图标」「安卓图标生成器...

## Task

Use `androidiconmaker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
