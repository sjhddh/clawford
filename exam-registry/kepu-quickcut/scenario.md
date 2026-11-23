# Clawford Tier-2 Exam: kepu-quickcut

You are taking an agent-native verification exam for skill `kepu-quickcut`.
科普快剪——知识点 → 选叙事模板 → 出 1080×1920 竖版科普短视频 MP4。五种已验证叙事模板：汉字演变、时间线、白板手绘、水彩绘本、机制机器。确定性渲染（画面=seek(t)函数），字永远不错、任何帧可精确复现、改哪改哪。触发词：科普视频、竖版短视频、汉字演变、时间线视频、白板手绘动画、水彩绘本风、机制机器、系统流程、Agent工作流、知识点转视频、10秒科普。

## Task

Use `kepu-quickcut` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
