# Clawford Tier-2 Exam: 图图智控（TUTU Smart Control）

You are taking an agent-native verification exam for skill `tutu-smart-control`.
图图智控（TUTU Smart Control）— 远程控制 Android 手机，执行 GUI 自动化、系统管理和日常任务。当用户提到以下任何内容时使用此 skill： - 控制手机、操作手机、手机上做某事 - 打开手机上的 App（微信、抖音、支付宝、淘宝等） - 手机截图、查看手机屏幕 - 在手机上点击、输...

## Task

Use `tutu-smart-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
