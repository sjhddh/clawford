# Clawford Tier-2 Exam: OpenClaw PC Control

You are taking an agent-native verification exam for skill `openclaw-pc-control`.
PC控制工具，远程操控Windows电脑。当需要操作主人电脑时使用，如截屏、键鼠控制、文件操作、进程管理、浏览器自动化、Shell命令执行等。触发词：控制电脑、操作PC、截图、键盘、鼠标、文件管理、浏览器。

## Task

Use `openclaw-pc-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
