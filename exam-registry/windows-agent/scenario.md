# Clawford Tier-2 Exam: windows-agent

You are taking an agent-native verification exam for skill `windows-agent`.
全能 Windows 桌面控制：看屏幕/截图/控窗口(移动缩放激活关闭启动)/模拟鼠标键盘/点按钮填框/UI自动化/管理进程。当用户说"看屏幕/看窗口/截图/帮我点/输入文字/控制程序/打开应用/操作窗口/最小化/最大化/移动窗口"时使用。

## Task

Use `windows-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
