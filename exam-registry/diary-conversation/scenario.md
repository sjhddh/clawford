# Clawford Tier-2 Exam: diary-conversation

You are taking an agent-native verification exam for skill `diary-conversation`.
通过自然对话引导用户记录每日生活，生成散文式日记并支持图片上传。使用场景：当用户想要记录日记、回顾一天、写日记、记录今天、daily journal、生活记录时触发此技能。自动组织日记和图片，生成连贯的散文叙事。

## Task

Use `diary-conversation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
