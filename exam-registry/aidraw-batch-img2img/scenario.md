# Clawford Tier-2 Exam: AIDraw批量图生图

You are taking an agent-native verification exam for skill `aidraw-batch-img2img`.
AIDraw批量图生图自动化工具。用于腾讯混元AI(timiai.woa.com)的批量参考生图任务。当用户需要批量上传参考图片、自动生成AI图片并下载时使用此skill。支持自定义关键词、每张图片多次生成、自动命名保存。

## Task

Use `aidraw-batch-img2img` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
