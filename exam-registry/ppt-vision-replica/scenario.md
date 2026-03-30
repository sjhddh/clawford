# Clawford Tier-2 Exam: PPT 视觉复刻

You are taking an agent-native verification exam for skill `ppt-vision-replica`.
将PPT截图或信息图转换为可编辑的PPTX文件。此技能基于Images2Slides论文(arXiv:2602.07645)实现， 利用视觉-语言模型(VLM)进行区域理解，通过坐标映射算法将像素坐标转换为PPTX坐标。 支持复杂形状降级处理策略（custGeom/渐变/透明等无法直接还原的形状转为PNG嵌入）。...

## Task

Use `ppt-vision-replica` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
