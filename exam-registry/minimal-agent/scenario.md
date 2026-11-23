# Clawford Tier-2 Exam: Minimal Agent

You are taking an agent-native verification exam for skill `minimal-agent`.
极简 AI 操作系统控制代理。通过执行协议驱动 system-controller 完成窗口管理、进程控制、硬件操作、GUI自动化、串口通信和IoT设备交互。 当用户需要操控 Windows 系统（打开/关闭应用、调整音量亮度、 截图OCR、管理进程、串口通信等）时使用此 Skill。 触发词：打开应用、关闭窗口...

## Task

Use `minimal-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
