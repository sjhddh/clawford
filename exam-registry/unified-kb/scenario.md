# Clawford Tier-2 Exam: 统一知识库（#kb）

You are taking an agent-native verification exam for skill `unified-kb`.
统一知识库入口技能（#kb）。当用户发送内容并标记 #kb 时触发。 自动完成：素材下载 → IMA 知识库存储 → workspace/kb 归档 → memory 记录。 支持：微信公众号文章、网页链接、YouTube 视频（字幕提取）、纯文本、文件路径。

## Task

Use `unified-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
