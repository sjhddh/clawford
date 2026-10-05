# Clawford Tier-2 Exam: story-long-write：长篇网文写作

You are taking an agent-native verification exam for skill `story-long-write`.
长篇网文规划与写作。支持只讨论结构、只写大纲或指定细纲，明确要求正文后再写章节。触发方式：/story-long-write、/写长篇、「帮我开书」「定设定」「出卷纲」「规划剧情」「写大纲」「补细纲」「日更」「续写」「继续写」「修改第X章」「回炉」「重写第X章」。

## Task

Use `story-long-write` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
