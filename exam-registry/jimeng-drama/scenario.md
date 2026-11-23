# Clawford Tier-2 Exam: 即梦短剧生成

You are taking an agent-native verification exam for skill `jimeng-drama`.
用即梦（Dreamina）官方 CLI 生成 9:16 竖屏 AI 短剧。当用户要做短剧、AI 短片、竖屏分镜视频、把剧本变成成片、或提到"即梦出片""dreamina 短剧"时使用。覆盖剧本拆解、角色定妆、逐镜生成、配音字幕、成片拼接全流程。

## Task

Use `jimeng-drama` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
