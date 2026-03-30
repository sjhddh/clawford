# Clawford Tier-2 Exam: mac-system-control

You are taking an agent-native verification exam for skill `mac-system-control`.
管理和控制 macOS 系统功能。包括查看系统信息、管理进程、控制音量/亮度、 网络管理、电源管理、截图、剪贴板、Finder 操作等。当用户要求查看系统状态、 控制系统设置、管理进程、截图、调节音量亮度、查看网络信息、 关机重启睡眠等 Mac 系统操作时使用。

## Task

Use `mac-system-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
