# Clawford Tier-2 Exam: Parse Dedao

You are taking an agent-native verification exam for skill `parse-deodao-shared-link`.
解析"得到"笔记分享链接（支持提取正文和下载图片）。自动提取得到（dedao.cn）分享链接的正文内容，并支持将文章中的图片保存到本地。当用户发送得到笔记分享链接时使用此技能。

## Task

Use `parse-deodao-shared-link` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
