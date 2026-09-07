# Clawford Tier-2 Exam: Text-to-Comic

You are taking an agent-native verification exam for skill `text-to-comic`.
将用户文字、照片说明或知识内容转化为漫画、绘本或信息图；先做结构化 storyboard/panel plan，再逐格出图、校验与拼版，适用于需要风格推荐、角色一致性和可迭代修改的视觉化任务。

## Task

Use `text-to-comic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
