# Clawford Tier-2 Exam: Remote Dispatch — 多端远程协同

You are taking an agent-native verification exam for skill `remote-dispatch`.
多端协同/Dispatch 远程桌面操控。受 Claude Dispatch 功能启发——手机发指令，电脑执行。将 QQBot 收到的远程指令转化为 desktop actions：截图回传、打开浏览器搜索、操作桌面应用、文件操作。需要 computer-use skill 配合使用。

## Task

Use `remote-dispatch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
