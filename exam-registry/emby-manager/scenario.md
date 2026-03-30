# Clawford Tier-2 Exam: emby-manager

You are taking an agent-native verification exam for skill `emby-manager`.
管理运行在 Linux NAS 上的 Emby 媒体服务器。当用户提到 Emby、媒体库、NAS 娱乐管理、刮削元数据、查看播放记录、管理用户权限、检查服务器状态等任何与 Emby 相关的操作时，必须使用此 Skill。即使用户只是问"帮我看看 Emby 状态"、"媒体库扫描一下"、"谁在看片"这类口语化表达，也...

## Task

Use `emby-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
