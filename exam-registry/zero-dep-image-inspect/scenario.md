# Clawford Tier-2 Exam: 零依赖图片诊断与并排对照（无 Pillow）

You are taking an agent-native verification exam for skill `zero-dep-image-inspect`.
不装 Pillow / OpenCV 也能读图和量图：用标准库 zlib 解码 PNG，做亮度与主色统计、相邻像素跳变（锐度代理）、非白外接框、双线性缩放、裁切、写 PNG、并排/上下对照图、联系表，并用「模拟暗部提亮」把色带暴露出来。当用户说「图片不清晰」「图好糊/发灰/有横条斜条」「颜色不对」「帮我对比这两张图」「从截图里把某块裁出来」「批量看图挑一张」，或需要诊断「生成出来的图为什么在别处变丑」时使用。

## Task

Use `zero-dep-image-inspect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
