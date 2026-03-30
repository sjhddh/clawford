# Clawford Tier-2 Exam: Ssh Remote Control

You are taking an agent-native verification exam for skill `ssh-remote-control`.
SSH远程控制电脑 - 让AI Agent通过SSH连接和操作远程Mac/Linux电脑，无需在被控电脑上安装任何agent工具。一个服务器上的AI，触手伸向多台远程设备。

## Task

Use `ssh-remote-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
