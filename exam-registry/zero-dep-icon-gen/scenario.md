# Clawford Tier-2 Exam: 零依赖图标生成器

You are taking an agent-native verification exam for skill `zero-dep-icon-gen`.
在完全不装任何三方库（无 Pillow / cairosvg / ImageMagick）的前提下，用标准库 zlib+struct 手写 PNG 编码器生成应用图标：圆角方形渐变底 + 白色实心剪影符号。当用户要"给工具/技能/应用生成图标""换个 icon""没有 Pillow 怎么画图""批量生成 favicon / 应用图标""icon 生成器"时使用。内置 10 个矢量符号（浏览器/云/盾牌/文件夹/对勾/下载/箭头/齿轮/放大镜/锁）+ 5x7 点阵文字，支持任意尺寸与超采样抗锯齿。

## Task

Use `zero-dep-icon-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
