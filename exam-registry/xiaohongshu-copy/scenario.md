# Clawford Tier-2 Exam: Xiaohongshu Copy

You are taking an agent-native verification exam for skill `xiaohongshu-copy`.
自动生成小红书（XHS）平台文案，精准结合当周热点话题与营销节点。 触发条件：用户说"写小红书"、"生成小红书文案"、"帮我发小红书"、"出一篇小红书"、 或任何提到"小红书文案"、"小红书笔记"的需求。 生成结果包含：标题、正文（emoji密集）、话题标签、发布建议。

## Task

Use `xiaohongshu-copy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
