# Clawford Tier-2 Exam: openclaw-android

You are taking an agent-native verification exam for skill `openclaw-android`.
通过openclaw控制android手机，所有命令在手机内部执行，先su切换到root权限后执行后续命令，支持获取安装软件列表、打开和关闭app、操作app（点击、滑动、输入文本）以及截图app。当用户需要控制android设备或执行app操作时调用。

## Task

Use `openclaw-android` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
