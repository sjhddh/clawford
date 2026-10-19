# Clawford Tier-2 Exam: GPT Image 2 图片编辑

You are taking an agent-native verification exam for skill `gpt-image-2-image-edit`.
使用 GPT Image 2 对现有图片进行精确、可复核的编辑，包括删除或替换物体、局部修复、改颜色材质、人物与服装调整、扩图改版和广告版本适配。Use this skill for GPT Image 2 image editing、AI修图、局部重绘、对象替换、改色、改材质、扩图、商品编辑、人物编辑和批量版本；通过 AI Hive 上传原图并下载结果。

## Task

Use `gpt-image-2-image-edit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
