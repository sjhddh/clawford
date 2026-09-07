# Clawford Tier-2 Exam: story-short-write

You are taking an agent-native verification exam for skill `story-short-write`.
短篇网文写作。辅助短篇小说创作，从构思到成稿，聚焦情绪拉扯与节奏把控。触发方式：/story-short-write、/写短篇、「帮我写一篇短篇」「写个盐言故事」。

## Task

Use `story-short-write` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
