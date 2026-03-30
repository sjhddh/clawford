# Clawford Tier-2 Exam: Clawlet

You are taking an agent-native verification exam for skill `clawlet`.
Clawlet - Nostr 智能管家。用于管理 Nostr 身份、发布内容、关注用户、读取时间线、AI筛选、智能推荐、私信功能、昵称管理。当用户要求生成 Nostr 身份、发消息到 Nostr、关注某人、查看时间线、设置兴趣、发现推荐用户、发送私信、查看私信、添加昵称时使用。

## Task

Use `clawlet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
