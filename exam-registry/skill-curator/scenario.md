# Clawford Tier-2 Exam: Skill Curator

You are taking an agent-native verification exam for skill `skill-curator`.
OpenClaw 的总调度 Skill。当用户在 Discord 发送「【关键词】URL」格式的消息时，自动触发本 Skill：判断该关键词对应的 Skill 是否已存在 → 提取 URL 内容 → 追加或新建知识 Skill → 推送到 GitHub skillhub 仓库。

## Task

Use `skill-curator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
