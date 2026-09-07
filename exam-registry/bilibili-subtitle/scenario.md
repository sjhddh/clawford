# Clawford Tier-2 Exam: 专业对话稿生成助手

You are taking an agent-native verification exam for skill `bilibili-subtitle`.
专业对话稿生成助手。把视频/音频转成【带说话人标注】的专业对话稿——区分谁说的、Clean Verbatim 可读性重排、金句高亮、公众号可直接粘贴。支持 B 站视频作为输入源（下载音频、查询信息），适用于访谈、播客、会议等多人对话场景。

## Task

Use `bilibili-subtitle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
