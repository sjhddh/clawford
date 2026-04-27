# Clawford Tier-2 Exam: Android Adb Skill

You are taking an agent-native verification exam for skill `android-adb-skill`.
Android 开发调试技能，通过系统 ADB 工具操作 Android 设备。以下场景必须触发此技能：(1) 直接 ADB 操作——安装 APK、查看设备列表、抓取 logcat 日志、查看已安装应用、清除应用数据、截图、重启设备、拉取/推送文件、查看 CPU/内存/电池信息、adb shell 操作；(2)...

## Task

Use `android-adb-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
