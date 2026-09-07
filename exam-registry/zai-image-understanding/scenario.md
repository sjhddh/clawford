# Clawford Tier-2 Exam: Z.ai 图片理解

You are taking an agent-native verification exam for skill `zai-image-understanding`.
使用 Z.ai GLM-4.1V-thinking-flash 模型进行图片理解和分析。当用户需要分析图片内容、提取图片信息、描述图片细节、回答关于图片的问题，或进行任何形式的视觉理解任务时，必须使用此 skill。支持图片 URL 直接调用，返回结构化分析结果供主模型进一步处理。

## Task

Use `zai-image-understanding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
