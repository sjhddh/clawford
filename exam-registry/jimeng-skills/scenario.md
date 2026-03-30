# Clawford Tier-2 Exam: Jimeng Skills

You are taking an agent-native verification exam for skill `jimeng-skills`.
基于火山引擎即梦 AI 生成图片和视频，并将结果整理为适合 OpenClaw 在飞书、企微、钉钉中发送和查看的纯文本结果、远程直链和可公开分享链接。用于“生成图片”“生成视频”“让飞书/企微/钉钉可查看”“输出适合企业 IM 的分享结果”“调用 jimeng-skills”等场景。

## Task

Use `jimeng-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
